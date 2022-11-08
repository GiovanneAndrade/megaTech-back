import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postRequestRepository({
  total,
  message,
  addressId,
  products,
}: {
  total: number;
  message: string;
  addressId: number;
  products: any;
}) {
  const result = await prisma.requests.create({
    data: {
      total: total,
      message: message,
      addressId: addressId,
      userId: 19,
      products: {
        connect: products,
      },
    },
  });
  return result;
}
async function getRequestRepository() {
  const result = await prisma.requests.findMany({
    where: {
      userId: 19,
    },
    select: {
      id: true,
      message: true,
      total: true,
      created_at: true,
      products: true,
    },
  });

  return result;
}

export { postRequestRepository, getRequestRepository };
