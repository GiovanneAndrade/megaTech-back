import { Router } from "express";
import {  postCategoryController } from "../controllers/users.controller";

const router = Router();

router.post("/user", postCategoryController);


export default router;
