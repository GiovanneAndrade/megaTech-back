import { Request, Response } from "express";
import * as allCategory from "../repositories/categories.repositories";

async function getCategoryController(req: Request, res: Response) {
  const result = await allCategory.getCategoryRepository();

  return res.send(result);
}

export { getCategoryController };
