import { Router } from "express";
import * as allControllers from "@/controllers";
import { verifyToken } from "@/middlewares/authentication";

const favoritiesRouter = Router();
favoritiesRouter

  .all("/*", verifyToken)
  .post("/favorities", allControllers.postFavoritiesController)
  .put("/favorities", allControllers.putRemoveFavoritiesController)
  .get("/favorities", allControllers.getFavoritiesController);

export default favoritiesRouter;
