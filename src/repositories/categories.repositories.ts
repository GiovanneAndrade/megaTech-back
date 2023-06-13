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
async function getPageCategoryRepository (page:any,categoryId:any) {
  const skip = (Number(page) - 1) * 10;
  const result = await prisma.category.findMany({
    where:{
      id:Number(categoryId)
    },
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
        skip: skip,
        take: 10,
      },
    },
  });

  return result[0];
}
export { getCategoryRepository, getPageCategoryRepository };
