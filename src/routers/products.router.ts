import { Router } from "express";
import {
  getProductsController,
  getProductsHotController,
  updateProductsHotController,
} from "@/controllers";

const productsRouter = Router();
productsRouter
  .get("/product", getProductsController)
  .get("/product/hot", getProductsHotController)
  .put("/product", updateProductsHotController)
export default productsRouter;
