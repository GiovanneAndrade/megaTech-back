import { PrismaClient } from "@prisma/client";
import { Favorities } from "@/types";

const prisma = new PrismaClient();

async function postContactRepository(userId: number, requestId:number) {
  const result = await prisma.contact.create({
    data: {
      message: "",
      userId: userId,
      requestId: 1,
    },
  });
  return result;
}

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

export { postContactRepository, getContactRepository };
