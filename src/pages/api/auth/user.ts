// pages/api/auth/user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Retrieve the token from cookies
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ isAuth: false, user: null });
  }

  try {
    // Verify and decode the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);

    // Send user information if the token is valid
    return res.status(200).json({
      isAuth: true,
      user: {
        name: (decoded as any).name,
        email: (decoded as any).email,
      },
    });
  } catch (error) {
    // If token verification fails, return an error response
    return res.status(401).json({ isAuth: false, user: null, error: (error as Error).message });
  }
}
