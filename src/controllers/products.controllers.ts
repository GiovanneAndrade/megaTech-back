import { Request, Response } from "express";
import { InternalServerError } from "../erros/erros";
import * as allProducts from "../services";

async function getProductsController(req: Request, res: Response) {
  const userId = req.user.userId;

  try {
    const result = await allProducts.getProductsService();
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

async function getProductsHotController(req: Request, res: Response) {
  try {
    const result = await allProducts.getProductsHotService();
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

async function updateProductsHotController(req: Request, res: Response) {
  const { newPrice, previousPrice, productId } = req.body as any;
  try {
    const result = await allProducts.updateHistoricService(newPrice, productId);
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

export {
  getProductsController,
  getProductsHotController,
  updateProductsHotController,
};
