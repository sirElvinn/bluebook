import { Router } from 'express';
import { getUserProfile, syncUser } from '../controllers/user.controller';
import { authLimiter } from '../middleware/rateLimiter';

const router = Router();

// Get user profile by clerkId (query param)
router.get('/profile', authLimiter, getUserProfile);

// Sync user to DB after Clerk sign-in (called from client)
router.post('/sync', syncUser);

export default router;
