import { Request, Response } from "express";
import * as allAddressService from "../services";
import { Andress } from "../types";
import {
  ifNotFoundError,
  InternalServerError,
  ifUnauthoredError,
} from "../erros/erros";



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

export {  postContactController };
