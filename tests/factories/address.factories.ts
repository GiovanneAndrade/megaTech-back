import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createAddressFactories(userId: number) {
  return await prisma.address.create({
    data: {
      cep: Number(faker.address.zipCode()),
      address: faker.address.streetAddress(),
      name_recipient: faker.name.fullName({ firstName: "Giovanne" }),
      number: Number(faker.random.alphaNumeric()),
      district: faker.name.fullName({ firstName: "district to" }),
      city: faker.address.city(),
      uf: faker.address.state(),
      complement: faker.address.direction(),
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export async function addressFactories(userId: number) {
  const data = {
    cep: Number(faker.random.numeric(6)),
    address: faker.address.streetAddress(),
    name_recipient: faker.name.fullName({ firstName: "Giovanne" }),
    number: Number(faker.random.numeric(1)),
    district: faker.name.fullName({ firstName: "district to" }),
    city: faker.address.city(),
    uf: faker.address.state(),
    complement: faker.address.direction(),
    userId: userId
  };
  return data
}
