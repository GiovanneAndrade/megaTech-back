/// <reference path="./express.d.ts" />

import "express-async-errors";
import cors from 'cors';
import express from "express";
import router from "./routers/index.router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router)
   

export default app
