import "express-async-errors";
import cors from 'cors';
import express from "express";
import router from "./routers/index.router";



const app = express();
app.use(express.json());
app.use(cors());

app.use(router)
   

export default app
