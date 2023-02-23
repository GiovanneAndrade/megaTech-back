import { Request, Response } from "express";
import * as allAddressService from "../services/index";
import { Andress } from "../protocols/index";
import { 
  ifNotFoundError, InternalServerError,  ifUnauthoredError
} from "../erros/erros";

async function postAddressController(req: Request, res: Response) {
  const newAddress = req.body as Andress;
   
  try {
    const result = await allAddressService.postAddressServices(newAddress);
    return res.send(result);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function getAddressController(req: Request, res: Response) {
  try {
    const result = await allAddressService.getAddressServices();
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

async function deleteAddressController(req: Request, res: Response) {
  const id = req.params.id;

  try {
    await allAddressService.deleteAddressServices(id);
    return res.sendStatus(200);
  } catch (error: any) {
    if (error.statusCode === 401) return ifUnauthoredError(res, error);

    return InternalServerError(res);
  }
}

async function updateAddressController(req: Request, res: Response) {
  const { currentAddress, previousAddress } = req.params;

  try {
    const result = await allAddressService.updateAddressServices(
      currentAddress,
      previousAddress
    );
    return res.send(result);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

export {
  postAddressController,
  getAddressController,
  deleteAddressController,
  updateAddressController,
};
