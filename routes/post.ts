import { Request, Response, Router } from 'express';
import prisma from '../prisma';

const router = Router();
router.get('/', async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, content, authorId } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const post = await prisma.post.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title,
        content,
      },
    });

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});
