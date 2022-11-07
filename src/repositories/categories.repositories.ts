import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getCategoryRepository(){
  const result = await prisma.category.findMany()
  
  return result;
}

export { getCategoryRepository };