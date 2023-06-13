import { PrismaClient } from "@prisma/client";
 
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

 
async function getSessionsRepository(token: string, userId:number) {
   return await prisma.session.create({
    data:{
      token: token,
      userId: Number(userId)
    }
  }); 
}

export { getSessionsRepository };
