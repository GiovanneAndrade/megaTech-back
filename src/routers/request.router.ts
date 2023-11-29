import { Router } from "express";
import {
  getAllRequestController,
  getRequestController,
  postRequestController,
} from "@/controllers";
import { verifyToken } from "@/middlewares/authentication";

const resquestRouter = Router();
resquestRouter
  .all("/*", verifyToken)
  .post("/request", postRequestController)
  .get("/request", getRequestController)
  //.get("/request", getAllRequestController);

export default resquestRouter;
