import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postFavoritiesRepository({
  productId,
  userId,
}: {
  productId: number;
  userId: number;
}) {
  const result = await prisma.favorities.update({
    where: {
      userId: userId,
    },
    data: {
      products: {
        connect: { id: productId },
      },
    },
  });
  return result;
}

async function postFavoritiesCreateRepository({ user }: { user: number }) {
  const order = await prisma.favorities.create({
    data: {
      userId: user,
    },
  });
  return order;
}

async function getFavoritiesRepository() {
  const result = await prisma.favorities.findMany({
    where: {
      userId: 1,
    },
    select: {
      products: true,
    },
  });

  return result;
}

export {
  postFavoritiesRepository,
  getFavoritiesRepository,
  postFavoritiesCreateRepository,
};
