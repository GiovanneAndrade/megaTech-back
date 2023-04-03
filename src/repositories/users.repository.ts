import { PrismaClient } from "@prisma/client";
import { User } from "@/protocols";

const prisma = new PrismaClient();

async function postUsersRepository(user: User) {
  return await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      password: user.password,
      phone: user.phone,
    },
  });
}

async function consultUser(userId: any) {
  return await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
}

export { postUsersRepository, consultUser };
