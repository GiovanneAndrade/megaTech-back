import { Request, Response } from "express";
import * as allUsers from "@/services";
import { InternalServerError, ifNotFoundError } from "@/erros/erros";
import { User } from "@/types";

async function postUsersController(req: Request, res: Response) {
  const user = req.body as User;

  try {
    const result = await allUsers.postUsersService(user);
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

async function postSigninController(req: Request, res: Response) {
  const { email, password } = req.body;
  
  try {
    const result = await allUsers.postSigninService(email, password);
    return res.json( result );
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);
    return InternalServerError(res);
  }
}

export { postUsersController, postSigninController };
