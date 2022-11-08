import { Router } from "express";
import { getAddressController, postAddressController } from "../controllers/address.controllers";

 
 

const router = Router();

router.post("/address", postAddressController);
router.get("/address", getAddressController);

export default router;