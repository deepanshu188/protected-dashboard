import express, { Request, Response } from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
import auth from './routes/auth';
import posts from './routes/posts';
import authMiddleware from './middleware/authMiddleware';

const app = express();

const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(authMiddleware);

app.use('/', auth);
app.use('/', posts);

app.get('/', (req: Request, res: Response) => {
  res.send('Root route is empty');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
