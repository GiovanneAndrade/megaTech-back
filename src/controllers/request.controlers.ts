import { Request, Response } from "express";
import { InternalServerError } from "../erros/erros";
import * as allRequest from "../services/index";

async function postRequestController(req: Request, res: Response) {
  const {
    total,
    message,
    addressId,
    products,
  }: {
    total: number;
    message: string;
    addressId: number;
    products: any;
  } = req.body;
 
  const lastRequest = req.body;
  try {
    const summary = await allRequest.postRequestService(lastRequest);

  return res.send({summary, products});
}

async function getRequestController(req: Request, res: Response) {
  const result = await allRequest.getRequestRepository();

  return res.send(result);
}

export { postRequestController, getRequestController };
