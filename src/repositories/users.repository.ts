import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postCategoryRepository() {
  const result = await prisma.user.create({
    data: {
      category: "teste1",
      image: "testeImage1",
    },
  });
  return result;
}

export { postCategoryRepository };
