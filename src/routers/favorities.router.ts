import { Router } from "express";
import {
  getFavoritiesController,
  postFavoritiesController,
  putRemoveFavoritiesController,
} from "../controllers";
import { verifyToken } from "../middlewares/authentication";

const favoritiesRouter = Router();
favoritiesRouter
  .all("/*", verifyToken)
  .post("/favorities", postFavoritiesController)
  .put("/favorities", putRemoveFavoritiesController)
  .get("/favorities", getFavoritiesController);

export default favoritiesRouter;
