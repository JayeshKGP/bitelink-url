// pages/api/createbite.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { MongoClient } from 'mongodb';
import { nanoid } from 'nanoid'; // A library to generate unique IDs
import clientPromise from '@/lib/mongodb';

interface DecodedToken extends JwtPayload {
  name: string;
  email: string;
}

const generateUniqueAlias = async (collection: any): Promise<string> => {
  let alias = '';
  let exists = true;
  while (exists) {
    alias = nanoid(8); // Generate an 8-character random alias
    exists = await collection.findOne({ alias });
  }
  return alias;
};

export default async function createBiteHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { mainurl, alias: aliasFromBody } = req.body;
  if (!mainurl) {
    return res.status(400).json({ message: 'Main URL is required' });
  }

  const token = req.cookies?.token;
  let userEmail = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as DecodedToken;
      userEmail = decoded.email;
    } catch (error) {
      // Token is invalid or expired
      return res.status(401).json({ message: 'Invalid token' });
    }
  }

  // Connect to MongoDB
  const client = await clientPromise;
  const collection = client.db('Data').collection('BiteLinks');

  let alias = aliasFromBody;

  if (!alias || alias=='') {
    alias = await generateUniqueAlias(collection);
  } else {
    const existingUrl = await collection.findOne({ alias });
    if (existingUrl) {
      return res.status(409).json({ message: 'Alias already in use. Please choose another.' });
    }
  }

  // Create and insert the new short URL document
  const shortUrlDocument = {
    mainurl,
    alias,
    createdAt: new Date(),
    user: userEmail || null,
  };

  await collection.insertOne(shortUrlDocument);

  return res.status(201).json({
    message: 'Short URL created successfully',
    data: {
      alias,
      mainurl,
      user: userEmail ? { email: userEmail } : null,
    },
  });
}
