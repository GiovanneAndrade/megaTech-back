import { Request, Response } from "express";
import * as allUsers from "../services/index";

import { InternalServerError } from "../erros/erros";
import { User } from "../protocols";

async function postUsersController(req: Request, res: Response) {
  const user = req.body as User;

  try {
    const result = await allUsers.postUsersService(user);
 
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

export { postUsersController };
