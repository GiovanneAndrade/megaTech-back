import { Request, Response } from "express";
import * as allAddressService from "@/services";
import {
  ifNotFoundError,
  InternalServerError,
  ifUnauthoredError,
} from "@/erros/erros";

async function getContactController(req: Request, res: Response) {
  const userId = req.user.userId;
  const requestId = req.params.requestId;
  try {
    const result = await allAddressService.getContactServices(Number(userId), Number(requestId));
    return res.send(result);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function postContactController(req: Request, res: Response) {
  const userId = req.user.userId;
  const requestId = req.query.requestId;
 
  try {
    const result = await allAddressService.postContactServices(Number(userId), Number(requestId));
    return res.sendStatus(201);
  } catch (error) {
    if (error.statusCode === 401) return ifUnauthoredError(res, error);
    return InternalServerError(res);
  }
}

export { getContactController, postContactController };
