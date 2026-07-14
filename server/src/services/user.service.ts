// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

export const getUserById = async (id: string) => {
  // Mock logic for now until Prisma is initialized fully
  return { id, name: 'Student 1', role: 'student' };
};
