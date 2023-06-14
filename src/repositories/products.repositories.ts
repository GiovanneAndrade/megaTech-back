import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProductsRepository() {
  const result = await prisma.products.findMany({
    orderBy: [
      {
        requests: {
          _count: "desc",
        },
      },
    ],
    select: {
      id: true,
      name: true,
      price: true,
      images: true,
      description: true,
      Assessments: true,
      _count: {
        select: {
          requests: true,
        },
      },
    },
  });

  return result;
}

async function getProductsHotRepository() {
  const result = await prisma.products.findMany({
    orderBy: {
      price: "asc",
    },
  });

  return result;
}
async function updateStokeProductsRepository(
  productQuantity: any,
  stoke: number
) {
  const result = await prisma.products.update({
    where: {
      id: Number(productQuantity.productId),
    },
    data: {
      stoke: Number(stoke),
    },
  });

  return result;
}

async function consultProductsHotRepository(productId: number) {
  const id = productId;
  const result = await prisma.products.findMany({
    where: {
      id: productId,
    },
  });

  return result;
}

async function updateHistoricRepository(newPrice: number, productId: number) {
  const result = await prisma.products.update({
    where: {
      id: Number(productId),
    },
    data: {
      price: Number(newPrice),
    },
  });

  return result;
}

async function priceHistoricRepository(
  newPrice: number,
  previousPrice: any,
  productId: number
) {
  const result = await prisma.priceHistory.upsert({
    where: {
      id: 1,
    },
    update: {
      newPrice: Number(newPrice),
      previousPrice: Number(previousPrice),
    },
    create: {
      previousPrice: Number(previousPrice),
      productId: Number(productId),
      newPrice: Number(newPrice),
    },
  });

  return result;
}
export {
  getProductsRepository,
  getProductsHotRepository,
  updateStokeProductsRepository,
  consultProductsHotRepository,
  priceHistoricRepository,
  updateHistoricRepository,
};
