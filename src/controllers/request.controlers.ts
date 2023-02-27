import { Request, Response } from "express";
import { ifNotFoundError, InternalServerError } from "../erros/erros";
import { Requests } from "../protocols";
import * as allRequest from "../services";

async function postRequestController(req: Request, res: Response) {
  const lastRequest = req.body as Requests;

  try {
    const summary = await allRequest.postRequestService(lastRequest);
    return res.send(summary);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function getRequestController(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const result = await allRequest.getRequestService(Number(id));
    return res.send(result);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

export { postRequestController, getRequestController };
