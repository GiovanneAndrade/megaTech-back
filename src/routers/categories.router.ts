import { Router } from "express";
import { getCategoryController } from "../controllers/index";

const categoriesRouter = Router();
categoriesRouter
.get("/categories", getCategoryController);

export default categoriesRouter;
