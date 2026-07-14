import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
});

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = userSchema.parse(req.query);
    const user = await userService.getUserById(id);
    res.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
