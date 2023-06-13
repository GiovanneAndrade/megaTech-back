import { Router } from "express";
import { getCategoryController, getPageCategoryController } from "../controllers/index";

const categoriesRouter = Router();
categoriesRouter
.get("/categories", getCategoryController)
.get("/categories/page", getPageCategoryController);
export default categoriesRouter;
