import { Router } from "express";
import * as allControllers from "@/controllers";
import { verifyToken } from "@/middlewares/authentication";

const addressRouter = Router();
addressRouter

  .all("/*", verifyToken)
  .post("/address", allControllers.postAddressController)
  .get("/address", allControllers.getAddressController)
  .delete("/address/:id", allControllers.deleteAddressController)
  .put("/address/:currentAddress/:previousAddress", allControllers.updateAddressController);

export default addressRouter;
