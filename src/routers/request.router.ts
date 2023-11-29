import { Router } from "express";
import * as allControllers from "@/controllers";
import { verifyToken } from "@/middlewares/authentication";

const resquestRouter = Router();
resquestRouter

  .all("/*", verifyToken)
  .post("/request", allControllers.postRequestController)
  .get("/request", allControllers.getRequestController)
  //.get("/request", allControllers.getAllRequestController);

export default resquestRouter;
