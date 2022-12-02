import { Router } from "express";
import {
  deleteAddressController,
  getAddressController,
  postAddressController,
  updateAddressController,
} from "../controllers/address.controllers";

const router = Router();

router.post("/address", postAddressController);
router.get("/address", getAddressController);
router.delete("/address/:id", deleteAddressController);
router.put("/address/:currentAddress/:previousAddress", updateAddressController);

export default router;
