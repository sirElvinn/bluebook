import { Router } from 'express';
import { getUserProfile } from '../controllers/user.controller';
import { authLimiter } from '../middleware/rateLimiter';

const router = Router();

// Apply rate limiting to specific routes
router.get('/profile', authLimiter, getUserProfile);

export default router;
