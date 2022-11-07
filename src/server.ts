import express from "express";

import categoryRouter from "./routers/users.router";

const app = express();
app.use(express.json());

app.use(categoryRouter);

app.listen(3001, () => {
  console.log("listening on port 3️⃣ 3️⃣ 3️⃣ 3️⃣ 👌");
});
