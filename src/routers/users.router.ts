import { Router } from "express";
import { postUsersController } from "../controllers/index";

const userRouter = Router();
userRouter.post("/user", postUsersController);

export default userRouter;
