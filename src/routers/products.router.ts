import { Router } from "express";
import { getProductsController } from "../controllers/products.controllers";
 
 

const router = Router();

router.get("/product", getProductsController);
 


export default router;