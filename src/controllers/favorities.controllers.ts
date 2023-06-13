import { Request, Response } from "express";
import { ifNotFoundError, InternalServerError } from "../erros/erros";
import { Favorities } from "../types";
import * as allFavorities from "../services";

async function postFavoritiesController(req: Request, res: Response) {
  const favorities = req.body as Favorities;
  const userId = req.user.userId;
  try {
    const result = await allFavorities.postFavoritiesService(favorities, userId);
    return res.send(result[0]);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function putRemoveFavoritiesController(req: Request, res: Response) {
  const favorities = req.body as Favorities;
  const userId = req.user.userId;
  try {
    const result = await allFavorities.postRemoveFavoritiesService(favorities, userId);
    return res.sendStatus(200);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function getFavoritiesController(req: Request, res: Response) {
  const userId = req.user.userId;
  try {
    const result = await allFavorities.getFavoritiesService(Number(userId));
    const { products } = result[0];
    return res.send(products);
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

export {
  postFavoritiesController,
  getFavoritiesController,
  putRemoveFavoritiesController,
};
