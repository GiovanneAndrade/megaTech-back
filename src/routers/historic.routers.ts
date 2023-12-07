import { Router } from "express";
import * as allControllers from "@/controllers";
import { verifyToken } from "@/middlewares/authentication";

const historicRouter = Router();
historicRouter

  .all("/*", verifyToken)
  .post("/historic", allControllers.posthistoricController)
  .get("/historic", allControllers.getHistoricController);

export default historicRouter;