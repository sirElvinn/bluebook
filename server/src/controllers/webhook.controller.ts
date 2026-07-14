import { Request, Response } from 'express';
import { Webhook } from 'svix';
import * as userService from '../services/user.service';

interface ClerkEmailAddress {
  email_address: string;
  id: string;
}

interface ClerkUserPayload {
  id: string;
  email_addresses: ClerkEmailAddress[];
  primary_email_address_id: string;
  first_name: string | null;
  last_name: string | null;
}

/**
 * POST /api/webhooks/clerk
 * Verifies and handles Clerk webhook events (user.created, user.updated).
 * Auto-syncs user data to Postgres without requiring client-side calls.
 */
export const handleClerkWebhook = async (req: Request, res: Response) => {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('CLERK_WEBHOOK_SECRET is not set');
    res.status(500).json({ error: 'Webhook secret not configured' });
    return;
  }

  // Grab the Svix headers Clerk sends for verification
  const svixId = req.headers['svix-id'] as string;
  const svixTimestamp = req.headers['svix-timestamp'] as string;
  const svixSignature = req.headers['svix-signature'] as string;

  if (!svixId || !svixTimestamp || !svixSignature) {
    res.status(400).json({ error: 'Missing Svix headers' });
    return;
  }

  // Verify the webhook signature
  const wh = new Webhook(webhookSecret);
  let payload: { type: string; data: ClerkUserPayload };

  try {
    payload = wh.verify(JSON.stringify(req.body), {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as { type: string; data: ClerkUserPayload };
  } catch (err) {
    console.error('[Webhook] Verification failed:', err);
    res.status(400).json({ error: 'Invalid webhook signature' });
    return;
  }

  const { type, data } = payload;

  if (type === 'user.created' || type === 'user.updated') {
    try {
      const primaryEmail = data.email_addresses.find(
        (e) => e.id === data.primary_email_address_id
      );

      if (!primaryEmail) {
        res.status(400).json({ error: 'No primary email found' });
        return;
      }

      await userService.upsertUser({
        clerkId: data.id,
        email: primaryEmail.email_address,
        firstName: data.first_name,
        lastName: data.last_name,
      });

      console.log(`[Webhook] User ${type}: ${data.id}`);
    } catch (err) {
      console.error('[Webhook] DB upsert failed:', err);
      res.status(500).json({ error: 'Failed to sync user' });
      return;
    }
  }

  res.status(200).json({ received: true });
};
