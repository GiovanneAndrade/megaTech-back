import "express-async-errors";
import express from "express";
import errorHandler from "./middlewares/erros.middlewares";
import userRouter from "./routers/users.router";
import categoriesRouter from "./routers/categories.router";

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(categoriesRouter);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("listening on port 👌");
});
