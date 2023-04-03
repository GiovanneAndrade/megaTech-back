import { Router } from "express";
import { postUsersController } from "../controllers";

const userRouter = Router();
userRouter.post("/user", postUsersController);

export default userRouter;
