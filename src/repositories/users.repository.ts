import { PrismaClient } from "@prisma/client";
import { User } from "@/types";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function postUsersRepository(user: User) {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  return await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      password: hashedPassword,
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

async function getUserRepository(email: string) {
  return await prisma.user.findFirst({
    where: {
      email:email,
    },
  });
}

export { postUsersRepository, consultUser, getUserRepository };
