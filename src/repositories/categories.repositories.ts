import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getCategoryRepository(  ) {
  
  const result = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      products: {
        select:{
          id: true,
          image:true,
          name:true,
          price:true,
          stoke:true,
          Assessments:true,
          description:true, 
          PriceHistory:{
            select:{
              newPrice:true,
              previousPrice:true
            }
          }
        },
        skip: 1,
        take: 10,
      },
    },
  });

  return result;
}

export { getCategoryRepository };
