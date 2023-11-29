import { Router } from "express";
 
import { verifyToken } from "@/middlewares/authentication";
import * as allControllers from "@/controllers";

const contactRouter = Router();
contactRouter

  .all("/*", verifyToken)
  .post("/contact", allControllers.postContactController)
  .get("/contact", allControllers.getContactController);

export default contactRouter;
