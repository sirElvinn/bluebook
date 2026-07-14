import { prisma } from '../lib/prisma';

export const getUserByClerkId = async (clerkId: string) => {
  return prisma.user.findUnique({
    where: { clerkId },
  });
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const upsertUser = async (data: {
  clerkId: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
}) => {
  return prisma.user.upsert({
    where: { clerkId: data.clerkId },
    update: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    create: {
      clerkId: data.clerkId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });
};
