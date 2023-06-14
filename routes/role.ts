import { Request, Response, Router } from 'express';
import prisma from '../prisma';

const router = Router();
router.get('/', async (req: Request, res: Response) => {
  try {
    const roles = await prisma.role.findMany();

    res.json(roles);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const role = await prisma.role.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(role);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    console.log(name);
    const role = await prisma.role.create({
      data: {
        name,
      },
    });

    res.json(role);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const role = await prisma.role.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name,
      },
    });

    res.json(role);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const role = await prisma.role.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(role);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

export default router;
