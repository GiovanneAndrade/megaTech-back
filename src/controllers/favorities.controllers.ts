import { Request, Response } from "express";
import * as allFavorities from "../repositories/favorities.repositories";

async function postFavoritiesController(req: Request, res: Response) {
  const {
    productId,
    userId,
  }: {
    productId: number;
    userId: number;
  } = req.body;

  await allFavorities.postFavoritiesRepository({
    productId,
    userId,
  });

  return res.sendStatus(201);
}

async function getFavoritiesController(req: Request, res: Response) {
  const result = await allFavorities.getFavoritiesRepository();
  const { products } = result[0];
  return res.send(products);
}

export { postFavoritiesController, getFavoritiesController };
