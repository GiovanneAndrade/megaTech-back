import { PrismaClient } from "@prisma/client";
import { Favorities } from "../types";

const prisma = new PrismaClient();



async function getContactRepository(userId: number, requestId:number) {
  const order = await prisma.contact.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      message: true,
      requestId: true,
      userId: true,
      created_at: true,
    },
  });
  return order;
}

export {  getContactRepository };
