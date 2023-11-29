import { Router } from "express";
import * as allControllers from "@/controllers";

const categoriesRouter = Router();
categoriesRouter

  .get("/categories", allControllers.getCategoryController)
  .get("/categories/page", allControllers.getPageCategoryController);

export default categoriesRouter;
