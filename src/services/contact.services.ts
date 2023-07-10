import * as allRepositories from "../repositories";
import { Andress } from "../types";

import { NotFoundError, UnauthoredError } from "../erros/erros";
import { consultUserService } from "./consultUser.services";

async function postContactServices(userId: number, requestId: number) {
  const resquest = await allRepositories.checkRequestRepository(requestId);

  if (!resquest || resquest.userId !== userId) {
    throw new UnauthoredError("Pedido não pertence ao usuario ou não existe");
  }

  const result = await allRepositories.postContactRepository(userId, requestId);
  return result;
}



export { postContactServices };
