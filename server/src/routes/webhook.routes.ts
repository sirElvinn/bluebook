import { Router } from 'express';
import { handleClerkWebhook } from '../controllers/webhook.controller';

const router = Router();

// Clerk sends webhook events here — must use raw body for signature verification
router.post('/clerk', handleClerkWebhook);

export default router;
