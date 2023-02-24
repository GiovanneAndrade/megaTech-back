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
      image: true,
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
    orderBy:{
      price:"asc"
    }
  });

  return result;
}

async function consultProductsHotRepository(productId:number) {
const id= productId
 
  const result = await prisma.products.findMany({
    where:{
      id:productId
    }
  });

  return result;
}
export { getProductsRepository, getProductsHotRepository,consultProductsHotRepository };
