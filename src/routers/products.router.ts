import { Router } from "express";
import * as allControllers from "@/controllers";

const productsRouter = Router();
productsRouter

  .get("/product", allControllers.getProductsController)
  .get("/product", allControllers.getProductsController)
  .get("/product/hot", allControllers.getProductsHotController)
  .put("/product", allControllers.updateProductsHotController);

export default productsRouter;
