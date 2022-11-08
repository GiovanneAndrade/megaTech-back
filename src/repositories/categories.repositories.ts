import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getCategoryRepository() {
  const result = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      products: true,
    },
  });

  return result;
}

export { getCategoryRepository };
