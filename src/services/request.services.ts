import { NotFoundError } from "../erros/erros";
import { Requests } from "@/protocols";
import * as allRepositories from "../repositories";
import { consultUserService } from "./consultUser.services";


async function postRequestService(lastRequest: Requests) {

  await consultUserService(lastRequest.userId);

  const consultAddress = await allRepositories.consultAddressRepository(lastRequest.addressId );
  if (!consultAddress) throw new NotFoundError("Address não existe");

  if(lastRequest.products.length  === 0) throw new NotFoundError("products não existe");

  const productsBody = lastRequest.products;
  for (let i = 0; i < productsBody.length; i++) {
    const productsLocals = await allRepositories.consultProductsHotRepository(productsBody[i].id);
    if (productsLocals.length === 0) throw new NotFoundError(`productId:${productsBody[i].id} não existe`);
  }

  const result = await allRepositories.postRequestRepository(lastRequest);
  return result;
}

async function getRequestService(id: number) {
  await consultUserService(id);
  const result = await allRepositories.getRequestRepository(id);

  return result;
}

export { postRequestService, getRequestService };
