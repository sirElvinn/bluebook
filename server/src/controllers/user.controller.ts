import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { z } from 'zod';

const clerkIdSchema = z.object({
  clerkId: z.string().min(1, 'clerkId is required'),
});

const syncUserSchema = z.object({
  clerkId: z.string().min(1),
  email: z.string().email(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
});

/**
 * GET /api/users/profile?clerkId=<clerkId>
 * Returns the user profile for a given Clerk user ID.
 */
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { clerkId } = clerkIdSchema.parse(req.query);
    const user = await userService.getUserByClerkId(clerkId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues });
    } else {
      console.error('[getUserProfile]', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/users/sync
 * Creates or updates the user record in Postgres after Clerk sign-in.
 * Called from the client on first authenticated load.
 */
export const syncUser = async (req: Request, res: Response) => {
  try {
    const data = syncUserSchema.parse(req.body);
    const user = await userService.upsertUser(data);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues });
    } else {
      console.error('[syncUser]', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
