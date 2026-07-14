import { PrismaClient } from '@prisma/client';

// Singleton pattern — avoids multiple Prisma instances during hot-reload in dev
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    // NOTE: The database connection URL is read from prisma.config.ts (Prisma 7+)
    // Run `npx prisma migrate dev --name init` once your DATABASE_URL is configured.
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
