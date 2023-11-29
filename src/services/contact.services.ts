import * as allRepositories from "@/repositories";
import { Andress } from "@/types";

import { NotFoundError, UnauthoredError } from "@/erros/erros";
import { consultUserService } from "@/services";

async function postContactServices(userId: number, requestId: number) {
  const resquest = await allRepositories.checkRequestRepository(requestId);

  if (!resquest || resquest.userId !== userId) {
    throw new UnauthoredError("Pedido não pertence ao usuario ou não existe");
  }

  const result = await allRepositories.postContactRepository(userId, requestId);
  return result;
}

async function getContactServices(userId: number, requestId: number) {
  const result = await allRepositories.getContactRepository(userId, requestId);
  return result;
}

export { postContactServices, getContactServices };
