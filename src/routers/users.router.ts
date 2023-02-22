import { Router } from "express";
import { postCategoryController } from "../controllers/index";

const userRouter = Router();
userRouter.post("/user", postCategoryController);

export default userRouter;
