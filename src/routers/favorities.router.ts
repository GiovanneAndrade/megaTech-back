import { Router } from "express";
import { getFavoritiesController, postFavoritiesController } from "../controllers/favorities.controllers";
 
 

const router = Router();

router.post("/favorities", postFavoritiesController);
router.get("/favorities", getFavoritiesController);

export default router;