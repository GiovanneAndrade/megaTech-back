import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postCategoryRepository({
  name,
  email,
  password,
  cpf,
  phone,
}: {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: number;
}) {
  const result = await prisma.user.create({
    data: {
      name: name,
      email: email,
      cpf: cpf,
      password: password,
      phone: phone,
    },
  });
 
async function consultUser(userId: any) {
  return await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
}

export { postCategoryRepository };
