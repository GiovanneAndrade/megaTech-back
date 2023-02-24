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

export { getCategoryController };
