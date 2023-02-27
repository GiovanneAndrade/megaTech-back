import { Request, Response } from "express";
import * as allAddress from "../repositories/index";
import { Andress } from "../protocols/index";
import { consultUser } from "../repositories/index";
import { conflictError, NotFoundError, UnauthoredError } from "../erros/erros";
import { consultUserService } from "./consultUser.services";

async function postAddressServices(andress: Andress): Promise<Andress> {
  await consultUserService(andress.userId)
  const result = await allAddress.postAddressRepository(andress);
  return result;
} 

async function getAddressServices() {
  const result = await allAddress.getAddressRepository();
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
