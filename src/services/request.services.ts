import { NotFoundError } from "../erros/erros";
import { Requests } from "../types";
import * as allRepositories from "../repositories";
import { consultUserService } from "./consultUser.services";
import cron from "node-cron";
import dayjs from "dayjs";

async function postRequestService(lastRequest: Requests, userId: number) {
  if (lastRequest.userId !== userId) {
    throw new NotFoundError("usuario não autorizado");
  }

  await consultUserService(lastRequest.userId);

  const consultAddress = await allRepositories.consultAddressRepository(
    lastRequest.addressId
  );
  if (!consultAddress) throw new NotFoundError("Address não existe");
console.log(consultAddress)
  if (lastRequest.products.length === 0) {
    throw new NotFoundError("products não existe");
  }
  if (consultAddress.userId !== userId) {
    throw new NotFoundError("endereço pertence a outro usuario");
  }

  const productsBody = lastRequest.products;
  for (let i = 0; i < productsBody.length; i++) {
    const productsLocals = await allRepositories.consultProductsHotRepository(
      productsBody[i].id
    );
    if (productsLocals.length === 0) {
      throw new NotFoundError(`productId:${productsBody[i].id} não existe`);
    }
  }
  
  const request = await allRepositories.postRequestRepository(lastRequest);
  const updatedProductQuantities = lastRequest.productQuantities.map((productQuantity) => ({
    ...productQuantity,
    requestId: request.id
  }));
  
  const result = await Promise.all(updatedProductQuantities.map((productQuantity) => {
     allRepositories.postQuantityRepository(productQuantity);
     return allServices.updateStokeProductsService(productQuantity);
  }));
  
  return {...request, result};
}

  const result = await allRepositories.postRequestRepository(lastRequest);
  return result;
}

async function getRequestService(id: number) {
  await consultUserService(id);
  const result = await allRepositories.getRequestRepository(id);

  return result;
}

async function getAllRequestService() {
  const result = await allRepositories.getAllRequestRepository();

  return result;
}

export { postRequestService, getRequestService, getAllRequestService };
