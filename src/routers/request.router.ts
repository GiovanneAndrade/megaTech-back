import { Router } from "express";
import { getRequestController, postRequestController } from "../controllers/request.controlers";
 

const router = Router();

router.post("/request", postRequestController);
router.get("/request", getRequestController);


export default router;