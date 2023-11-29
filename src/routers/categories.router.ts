import { Router } from "express";
import { getCategoryController, getPageCategoryController } from "@/controllers";

const categoriesRouter = Router();
categoriesRouter

  .get("/categories", getCategoryController)
  .get("/categories/page", getPageCategoryController);

export default categoriesRouter;
