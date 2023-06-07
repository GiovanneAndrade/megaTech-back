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

async function deleteAddressServices(id : any) {
  const consultAddressById = await allAddress.consultAddressRepository( id );
  if (!consultAddressById) throw new UnauthoredError("Address não existe");

  const result = await allAddress.deleteAddressRepository( id );

  return result;
}

async function updateAddressServices( currentAddress:any, previousAddress: any) {

  const consultCurrentAddress = await allAddress.consultAddressRepository( currentAddress );
  const consultPreviousAddress = await allAddress.consultAddressRepository( previousAddress );
  if (!consultCurrentAddress || !consultPreviousAddress) throw new NotFoundError("Address não existe");

  const result = await allAddress.updateAddressRepository({currentAddress, previousAddress,});
  return result;
}

export {
  postAddressServices,
  getAddressServices,
  deleteAddressServices,
  updateAddressServices,
};
