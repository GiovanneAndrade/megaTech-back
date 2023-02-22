import { Router } from "express";
import handleApplicationErrors from "../middlewares/erros.middlewares";
import userRouter from "../routers/users.router";
import categoriesRouter from "../routers/categories.router";
import addressRouter from "../routers/address.router";
import favoritiesRouter from "../routers/favorities.router";
import resquestRouter from "../routers/request.router";
import productsRouter from "../routers/products.router";


const router = Router();
router.use(userRouter);
router.use(categoriesRouter);
router.use(addressRouter);
router.use(favoritiesRouter);
router.use(resquestRouter);
router.use(productsRouter);
router.use(handleApplicationErrors);

export default router;