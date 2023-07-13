import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createSessionFactories(token: string, userId: number) {
  return await prisma.session.create({
    data: {
      token: token,
      userId: Number(userId),
    },
  });
}
