import { PrismaClient } from "@prisma/client";
import { Requests } from "@/types";

const prisma = new PrismaClient();

async function postRequestRepository(lastRequest: Requests) {
  const result = await prisma.requests.create({
    data: {
      total: lastRequest.total,
      message: lastRequest.message,
      addressId: lastRequest.addressId,
      userId: lastRequest.userId,
      payment: "CREDCARD",
      deliveryType: "STANDARD",
      orderStatus: "IN_ANALYSIS",
      products: {
        connect: lastRequest.products,
      },
    },
  });
  return result;
}

async function postQuantityRepository(updatedProductQuantities: any) {
  const result = await prisma.productQuantity.create({
    data: {
      productId: Number(updatedProductQuantities.productId),
      quantity: Number(updatedProductQuantities.quantity),
      requestId: Number(updatedProductQuantities.requestId),
    },
  });
  return result;
}

async function getAllRequestRepository() {
  const result = await prisma.requests.findMany({
    where: {
      userId: 1,
    },
    include: {
      products: true,
      Address: true,
    },
  });

  return result;
}

async function checkStatusRepository() {
  const result = await prisma.requests.findMany({
    select: {
      id: true,
      created_at: true,
    },
  });

  return result;
}
async function checkRequestRepository(requestId: number) {
 
  const result = await prisma.requests.findFirst({
    where: {
      id: Number(requestId),
    },
   
 
  });
 
  return result;
}
async function UpdateStatusRepository(requestId: number, status: any) {
  const result = await prisma.requests.update({
    where: {
      id: Number(requestId),
    },
    data: {
      orderStatus: status,
    },
  });

  return result;
}

async function getRequestRepository(id: number) {
  return await prisma.requests.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      message: true,
      total: true,
      created_at: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      products: {
        select: {
          id: true,
          name: true,
          price: true,
        },
      },
      Address: true,
    },
  });
}

export {
  postRequestRepository,
  getRequestRepository,
  getAllRequestRepository,
  checkStatusRepository,
  checkRequestRepository,
  UpdateStatusRepository,
  postQuantityRepository,
};
