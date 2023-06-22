import { PrismaClient } from "@prisma/client";
import { Favorities } from "../types";

const prisma = new PrismaClient();

async function postFavoritiesRepository(favorities: Favorities) {
  const result = await prisma.favorities.update({
    where: {
      userId: favorities.userId,
    },
    data: {
      products: {
        connect: favorities.productId,
      },
    },
  });
  return result;
}

async function postFavoritiesCreateRepository(user: number) {
  const order = await prisma.favorities.create({
    data: {
      userId: user,
    },
  });
  return order;
}

async function removeFavoritiesRepository(favorities: Favorities) {
  const result = await prisma.favorities.update({
    where: {
      userId: favorities.userId,
    },
    data: {
      products: {
        disconnect: favorities.productId,
      },
    },
  });

  return result;
}

async function getFavoritiesRepository(userId: number) {
  const result = await prisma.favorities.findMany({
    where: {
      userId: userId,
    },
    select: {
      products: {
        select: {
          id: true,
          name: true,
          images: true,
          category: true,
          price: true,
          description: true,
          Assessments: true,
          stoke: true,
          PriceHistory: true,
          ProductQuantity: true,
        },
      },
    },
  });
  return result;
}
async function consultFavoritiesRepository(favoritieId: number) {
  const result = await prisma.favorities.findFirst({
    where: {
      id: Number(favoritieId),
    },
    include: {
      products: true,
      user: true,
    },
  });
  return result;
}

export {
  postFavoritiesRepository,
  getFavoritiesRepository,
  postFavoritiesCreateRepository,
  removeFavoritiesRepository,
  consultFavoritiesRepository,
};
