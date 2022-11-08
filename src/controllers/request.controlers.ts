import { Request, Response } from "express";
import * as allRequest from "../repositories/request.resositories"

async function postRequestController(req: Request, res: Response) {
  const {         
    total,
    message,  
    addressId ,
    products  
  }: {
    total: number;
    message: string;
    addressId: number;
    products: any;
  } = req.body;

  const result = await allRequest.postRequestRepository({
    total,
    message,  
    addressId,
    products
  });

  return res.send(result);
}

async function getRequestController(req: Request, res: Response){
  const result = await allRequest.getRequestRepository()

  return res.send(result);
} 

export { postRequestController, getRequestController};
