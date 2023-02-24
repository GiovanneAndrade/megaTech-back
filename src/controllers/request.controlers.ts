import { Request, Response } from "express";
import { InternalServerError } from "../erros/erros";
import * as allRequest from "../services/index";

async function postRequestController(req: Request, res: Response) {
  const lastRequest = req.body as Requests;
 
  const lastRequest = req.body;
  try {
    const summary = await allRequest.postRequestService(lastRequest);

    return res.send( summary );
  } catch (error) {
    return InternalServerError(res);
  }
}

async function getRequestController(req: Request, res: Response) {
  try {
    const result = await allRequest.getRequestService();
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

export { postRequestController, getRequestController };
