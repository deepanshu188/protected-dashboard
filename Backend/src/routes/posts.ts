import express, { Request, Response } from 'express';

const router = express.Router();

const posts = [
  {
    id: 1,
    published_at: '2023-12-16T04:50:34.225Z',
    name: 'Mike',
    title: 'Dino: Next-generation JavaScript runtime',
    content: `Deno features improved security, performance, and developer experience compared to its predecessor. It's a great time to upgrade your Node.js project to run on Deno.`,
  },
  {
    id: 2,
    published_at: '2023-12-14T04:50:34.225Z',
    name: 'Jay',
    title: 'Astro: A web framework for content-driven websites',
    content: `Astro powers the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between.`,
  },
];

router.get('/posts', async (req: Request, res: Response) => {
  return res.status(200).json({ posts });
});

export default router;
