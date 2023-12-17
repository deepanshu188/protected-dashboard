import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const blacklistRoutes = new Set(['/', '/login']);
const secret = process.env.JWT_SECRET || '';

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!blacklistRoutes.has(req.url)) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ').at(-1);

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, secret, (err) => {
      if (err) return res.status(403).send({ message: 'token expired!' })
      next();
    });
  } else next();
};

export default authMiddleware;
