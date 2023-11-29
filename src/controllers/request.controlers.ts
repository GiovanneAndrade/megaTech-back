import { Request, Response } from "express";
import { ifNotFoundError, InternalServerError } from "@/erros/erros";
import { Requests } from "@/types";
import * as allRequest from "@/services";

async function postRequestController(req: Request, res: Response) {
  const lastRequest = req.body as Requests;
  const userId = req.user.userId;
  try {
    const summary = await allRequest.postRequestService(lastRequest, userId);
    return res.send(summary);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function getRequestController(req: Request, res: Response) {
  const userId = req.user.userId;
  try {
    const result = await allRequest.getRequestService(Number(userId));
    return res.send(result);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function getAllRequestController(req: Request, res: Response) {
  try {
    const result = await allRequest.getAllRequestService();
    return res.send(result);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

export { postRequestController, getRequestController, getAllRequestController };
