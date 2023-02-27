import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createUserFactories() {
  return await prisma.user.create({
    data: {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password:faker.random.alphaNumeric(5),
      cpf:faker.random.numeric(11),
      phone:Number(faker.random.numeric(11)),
    },
  });
}