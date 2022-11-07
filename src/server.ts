import "express-async-errors";
import express from "express";
import errorHandler from "./middlewares/erros.middlewares";

import categoryRouter from "./routers/users.router";

const app = express();
app.use(express.json());

app.use(categoryRouter);
app.use(errorHandler);

app.listen(3001, () => {
  console.log("listening on port 👌");
});
