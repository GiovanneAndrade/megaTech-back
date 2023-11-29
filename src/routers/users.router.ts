import { Router } from "express";
import { postSigninController, postUsersController } from "@/controllers";

const userRouter = Router();
userRouter

  .post("/signup", postUsersController)
  .post("/signin", postSigninController);

export default userRouter;
