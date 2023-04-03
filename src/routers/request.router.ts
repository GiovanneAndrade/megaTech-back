import { Router } from "express";
import { getRequestController, postRequestController } from "../controllers";
 

const resquestRouter = Router();
resquestRouter
.post("/request", postRequestController)
.get("/request/:id", getRequestController)


export default resquestRouter;