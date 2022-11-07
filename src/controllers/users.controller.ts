import * as allCategory from "../repositories/users.repository";
import { Request, Response } from "express";

async function postCategoryController(req: Request, res: Response) {
  const {
    name,
    email,
    password,
    cpf,
    phone,
  }: { name: string; email: string; password: string; cpf: string , phone: number } =
    req.body;
  const result = await allCategory.postCategoryRepository({
    name,
    email,
    password,
    cpf,
    phone,
  });

  return res.send(result);
}

export { postCategoryController };
