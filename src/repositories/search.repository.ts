import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postSearchRepository(term: string) {
  const products = await prisma.products.findMany({
    where: {
      OR: [
        {
          name: {
            contains: term,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: term,
            mode: "insensitive",
          },
        },
      ],
    },
    select: {
      id: true,
      images: true,
      name: true,
      price: true,
      stoke: true,
      Assessments: true,
      description: true,
      PriceHistory: {
        select: {
          newPrice: true,
          previousPrice: true,
        },
      },
    },
  });

  return products;
}

export { postSearchRepository };
