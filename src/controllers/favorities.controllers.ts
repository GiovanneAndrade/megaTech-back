import { Request, Response } from "express";
import { InternalServerError } from "../erros/erros";
import { Favorities } from "../protocols";
import * as allFavorities from "../services/index";

async function postFavoritiesController(req: Request, res: Response) {
 
  const favorities = req.body as Favorities;
  try {
    await allFavorities.postFavoritiesService(favorities);
    return res.sendStatus(201);
  } catch (error) {
    return InternalServerError(res);
  }
}

async function getFavoritiesController(req: Request, res: Response) {
  try {
    const result = await allFavorities.getFavoritiesService();
    const { products } = result[0];
    return res.send(products);
  } catch (error) {
    return InternalServerError(res);
  }
}

export { postFavoritiesController, getFavoritiesController };
