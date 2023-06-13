import { Request, Response } from "express";
import { InternalServerError } from "../erros/erros";
import * as allCategory from "../services";

async function getCategoryController(req: Request, res: Response) {
  try {
    const result = await allCategory.getCategoryService();
    return res.send(result);
    
  } catch (error) {
    return InternalServerError(res);
  }
}
async function getPageCategoryController(req: Request, res: Response) {
  const page = req.query.page as any;
  const categoryId = req.query.categoryId as any;
 
  try {
    const result = await allCategory.getPageCategoryService(page, categoryId);
    return res.send(result);
    
  } catch (error) {
    return InternalServerError(res);
  }
}
export { getCategoryController, getPageCategoryController };
