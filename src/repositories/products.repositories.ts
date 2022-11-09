import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProductsRepository() {
  const result = await prisma.products.findMany({
    orderBy: [
      {
        favorities: {
          _count: "desc",
        },
      },
    ],
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      description: true,
      Assessments: true,
      _count: {
        select: {
          favorities: true,
        },
      },
    },
  });

  return result;
}

export { getProductsRepository };
