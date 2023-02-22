import { Router } from "express";
import {
  getProductsController,
  getProductsHotController,
} from "../controllers/index";

const productsRouter = Router();
productsRouter
  .get("/product", getProductsController)
  .get("/product/hot", getProductsHotController);

export default productsRouter;
