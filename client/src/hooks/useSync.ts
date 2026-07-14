import { useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import { api } from '../lib/api';

/**
 * Syncs the authenticated Clerk user to the Postgres database.
 * Runs once per session, after the user is fully loaded.
 * Safe to mount in any protected layout — it no-ops if already synced.
 */
export function useSync() {
  const { user, isLoaded } = useUser();
  const hasSynced = useRef(false);

  useEffect(() => {
    if (!isLoaded || !user || hasSynced.current) return;

    const primaryEmail = user.primaryEmailAddress?.emailAddress;
    if (!primaryEmail) return;

    hasSynced.current = true;

    api
      .post('/api/users/sync', {
        clerkId: user.id,
        email: primaryEmail,
        firstName: user.firstName,
        lastName: user.lastName,
      })
      .catch((err) => {
        // Non-fatal — log but don't crash the app
        console.error('[useSync] Failed to sync user:', err);
        hasSynced.current = false; // allow retry on next render
      });
  }, [isLoaded, user]);
}
