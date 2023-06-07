import { PrismaClient } from "@prisma/client";
import { Andress } from "../types/address.protocols";

const prisma = new PrismaClient();

async function postAddressRepository(andress: Andress, userId:number): Promise<Andress> {
  return await prisma.address.create({
    data: {
      cep: Number(andress.cep),
      address: andress.address,
      name_recipient: andress.name_recipient,
      number: Number(andress.number),
      district: andress.district,
      city: andress.city,
      uf: andress.uf,
      complement: andress.complement,
      user: {
        connect: {
          id: Number(userId),
        },
      },
    },
  });
}

async function getAddressRepository(userId:number) {
  return await prisma.address.findMany({
    where:{
      userId:Number(userId)
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
      primary: true,
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
}
async function consultAddressToUserIdRepository(userId:number,addressId: any) {
  return await prisma.address.findFirst({
    where: {
      AND: [
        { userId: userId },
        { id: Number(addressId) }
      ]
    },
  });
}
async function consultAddressRepository(id: any) {
  return await prisma.address.findFirst({
    where: {
      id: Number(id),
    },
  });
}

async function deleteAddressRepository(id: any) {
  return await prisma.address.delete({
    where: {
      id: Number(id),
    },
  });
}

async function updateAddressRepository({
  currentAddress,
  previousAddress,
}: {
  currentAddress: any;
  previousAddress: any;
}) {
  const result = await prisma.address.update({
    where: {
      id: Number(currentAddress),
    },
    data: {
      primary: true,
    },
  });
  await prisma.address.update({
    where: {
      id: Number(previousAddress),
    },
    data: {
      primary: false,
    },
  });

  return result;
}
export {
  postAddressRepository,
  consultAddressToUserIdRepository,
  getAddressRepository,
  deleteAddressRepository,
  updateAddressRepository,
  consultAddressRepository,
};
