import { Router } from "express";
import {
  deleteAddressController,
  getAddressController,
  postAddressController,
  updateAddressController,
} from "../controllers";

const addressRouter = Router();
addressRouter
  .post("/address", postAddressController)
  .get("/address", getAddressController)
  .delete("/address/:id", deleteAddressController)
  .put("/address/:currentAddress/:previousAddress", updateAddressController);

export default addressRouter;
