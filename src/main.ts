import * as Express from "express";
import { userRouter } from "./user/user.controller";
const app = Express();
app.get("/", (req, res, next) => {
  res.send("hello world");
});
app.use(Express.json());
app.use(userRouter);
app.listen(8080, () => {
  console.log("running server");
});
