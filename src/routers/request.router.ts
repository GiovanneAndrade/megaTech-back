import { Router } from "express";
import { getRequestController, postRequestController } from "../controllers/index";
 

const resquestRouter = Router();
resquestRouter
.post("/request", postRequestController)
.get("/request", getRequestController)


export default resquestRouter;