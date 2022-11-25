import { Router } from "express";
import { getProductsController, getProductsHotController } from "../controllers/products.controllers";
 
 
 

const router = Router();

router.get("/product", getProductsController)
router.get("/product/hot", getProductsHotController)


export default router;