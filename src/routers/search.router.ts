import { Router } from "express";
import { postSearchController } from "@/controllers";
 
 

const searchRouter = Router();
searchRouter

  .get("/search", postSearchController)
 
export default searchRouter;