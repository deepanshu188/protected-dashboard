import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const secret = process.env.JWT_SECRET || '';

const JWT_EXPIRATION = '2m';

const generateToken = (username: string): string => {
  return jwt.sign({ username }, secret, {
    expiresIn: JWT_EXPIRATION,
  });
};

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  const token = generateToken(username);

  if (!token) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json({ token });
});

export default router;
