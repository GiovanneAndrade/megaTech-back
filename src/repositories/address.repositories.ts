import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postAddressRepository({
  cep,
  address,
  name_recipient,
  number,
  district,
  city,
  uf,
  complement,
  userId,
}: {
  cep: number;
  address: string;
  name_recipient: string;
  number: number;
  district: string;
  city: string;
  uf: string;
  complement: string;
  userId: number;
}) {
  const result = await prisma.address.create({
    data: {
      cep: cep,
      address: address,
      name_recipient: name_recipient,
      number: number,
      district: district,
      city: city,
      uf: uf,
      complement: complement,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return result;
}
async function getAddressRepository() {
  const result = await prisma.address.findMany({
    where: {
      userId: 11,
    },
    select: {
      id: true,
      address: true,
      cep: true,
      city: true,
      complement: true,
      district: true,
      name_recipient: true,
      number: true,
      uf: true,
      user: {
        select: {
          id: true,
          name: true,
          phone: true,
        },
      },
    },
  });

  return result;
}

export { postAddressRepository, getAddressRepository };
