import { Request, Response } from "express";
import * as allProducts from "../repositories/products.repositories";

async function getProductsController(req: Request, res: Response) {
  const result = await allProducts.getProductsRepository();

  return res.send(result);
}
async function getProductsHotController(req: Request, res: Response) {
  const result = await allProducts.getProductsHotRepository();

  return res.send(result);
}
export { getProductsController, getProductsHotController };
