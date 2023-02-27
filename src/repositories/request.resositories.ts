import { PrismaClient } from "@prisma/client";
import { Requests } from "../protocols";

const prisma = new PrismaClient();

async function postRequestRepository(lastRequest:Requests) {
  const result = await prisma.requests.create({
    data: {
      total: lastRequest.total,
      message: lastRequest.message,
      addressId: lastRequest.addressId,
      userId: lastRequest.userId,
      products: {
        connect: lastRequest.products,
      },
    },
  });
  return result;
}

async function getRequestRepository(id:number) {
  return await prisma.requests.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      message: true,
      total: true,
      created_at: true,
      user:{
        select:{
          id:true,
          name:true,
          email:true
        }
      },
      products: {
        select: {
          id: true,
          name: true,
          price: true,
        },
      },
      Address: true
    },
  });
}

export { postRequestRepository, getRequestRepository };
