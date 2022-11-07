import { Router } from "express";
import { getCategoryController } from "../controllers/categories.controllers";
 

const router = Router();

router.get("/categories", getCategoryController);

export default router;