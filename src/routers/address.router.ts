import { Router } from "express";
import {
  deleteAddressController,
  getAddressController,
  postAddressController,
  updateAddressController,
} from "../controllers";
import { verifyToken } from "../middlewares/authentication";

const addressRouter = Router();
addressRouter
  .all("/*", verifyToken)
  .post("/address", postAddressController)
  .get("/address", getAddressController)
  .delete("/address/:id", deleteAddressController)
  .put("/address/:currentAddress/:previousAddress", updateAddressController);

export default addressRouter;
