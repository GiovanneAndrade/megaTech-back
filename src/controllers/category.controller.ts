import * as allCategory from "../repositories/category.repository";
import { Request, Response } from "express";

async function postCategoryController(req: Request, res: Response) {
  const result = await allCategory.postCategoryRepository();

  return res.send(result);
}

export {  postCategoryController };