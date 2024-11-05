// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '../../../lib/mongodb';

export default async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, password } = req.body;
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  try {
    const client = await clientPromise;
    const db = client.db('Auth'); // Change this to your database name
    const usersCollection = db.collection('User_Credentials'); // Change this to your collection name

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    console.log('Creating user...');
    // Hash the password

    try {
      console.log(password);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log('Hashed password:', hashedPassword);
    } catch (error) {
      console.error('Error:', error);
    }


    const salt = await bcrypt.genSalt(10);
    console.log('Salt, ', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password:', hashedPassword);

    // Create a new user
    await usersCollection.insertOne({ name, email, password: hashedPassword as string });

    // Generate a JWT token
    const token = jwt.sign({ name, email }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h',
    });

    // Set the token in a cookie
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`);

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
