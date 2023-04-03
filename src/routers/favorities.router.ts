import { Router } from "express";
import {
  getFavoritiesController,
  postFavoritiesController,
} from "../controllers";

const favoritiesRouter = Router();
favoritiesRouter
  .post("/favorities", postFavoritiesController)
  .get("/favorities/:id", getFavoritiesController);

export default favoritiesRouter;
