import { Request, Response } from "express";
import * as allAddressService from "@/services";
import { Andress } from "@/types";
import {
  ifNotFoundError,
  InternalServerError,
  ifUnauthoredError,
} from "@/erros/erros";

async function postAddressController(req: Request, res: Response) {
  const newAddress = req.body as Andress;
  const userId = req.user.userId;
  try {
    const result = await allAddressService.postAddressServices(newAddress, userId);
    return res.send(result);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function getAddressController(req: Request, res: Response) {
  const userId = req.user.userId;
  try {
    const result = await allAddressService.getAddressServices(Number(userId));
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

async function deleteAddressController(req: Request, res: Response) {
  const id = req.params.id as string;
  const userId = req.user.userId;
  try {
    await allAddressService.deleteAddressServices(id, userId);
    return res.sendStatus(200);
  } catch (error: any) {
    if (error.statusCode === 401) return ifUnauthoredError(res, error);

    return InternalServerError(res);
  }
}

async function updateAddressController(req: Request, res: Response) {
  const { currentAddress, previousAddress } = req.params;

  const userId = req.user.userId;
  try {
    const result = await allAddressService.updateAddressServices(
      currentAddress,
      previousAddress,
      userId
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
