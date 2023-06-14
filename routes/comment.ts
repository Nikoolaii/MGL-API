import { Request, Response, Router } from 'express';
import prisma from '../prisma';

const router = Router();
router.get('/', async (req: Request, res: Response) => {
  try {
    const comments = await prisma.comment.findMany();

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(comment);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { content, authorId, postId } = req.body;
    const comment = await prisma.comment.create({
      data: {
        content,
        authorId,
        postId,
      },
    });

    res.json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const comment = await prisma.comment.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        content,
      },
    });

    res.json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});
