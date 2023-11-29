import { Router } from "express";
 
import { verifyToken } from "@/middlewares/authentication";
import { getContactController, postContactController } from "@/controllers";

const contactRouter = Router();
contactRouter
  .all("/*", verifyToken)
  .post("/contact", postContactController)
  .get("/contact", getContactController);

export default contactRouter;
