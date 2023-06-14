import { Request, Response, Router } from 'express';
import prisma from '../prisma';

const router = Router();
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { username, mail, roleId, password } = req.body;
    const user = await prisma.user.create({
      data: {
        username,
        mail,
        password,
        roleId,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

export default router;
