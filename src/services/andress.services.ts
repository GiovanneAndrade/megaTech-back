import * as allAddress from "../repositories";
import { Andress } from "../types";

import { NotFoundError, UnauthoredError } from "../erros/erros";
import { consultUserService } from "./consultUser.services";

async function postAddressServices( andress: Andress, userId:number): Promise<Andress> {
  await consultUserService(userId);
  const result = await allAddress.postAddressRepository(andress, userId);
  return result;
}

async function getAddressServices(userId:number) {
  const result = await allAddress.getAddressRepository(userId);
  return result;
}

async function deleteAddressServices(id: any, userId:number) {
  const consultAddressById = await allAddress.consultAddressToUserIdRepository(userId, id);
 
 
  if (!consultAddressById) throw new UnauthoredError("Address não existe");

  const result = await allAddress.deleteAddressRepository(id);

  return result;
}

async function updateAddressServices(
  currentAddress: any,
  previousAddress: any,
  userId:number
) {  
  const consultCurrentAddress = await allAddress.consultAddressToUserIdRepository(
     userId, currentAddress
  );
  const consultPreviousAddress = await allAddress.consultAddressToUserIdRepository(
     userId, previousAddress
  );
  if (!consultCurrentAddress || !consultPreviousAddress)
    throw new NotFoundError("Address não existe");

  const result = await allAddress.updateAddressRepository({
    currentAddress,
    previousAddress,
  });
  return result;
}

export {
  postAddressServices,
  getAddressServices,
  deleteAddressServices,
  updateAddressServices,
};
