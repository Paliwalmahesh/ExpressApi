import * as Express from "express";
import { authRouter } from "./auth/auth.controller";
import { authentication } from "./core/middleware.service";
import { userRouter } from "./user/user.controller";

const app = Express();

app.get("/", (req, res, _next) => {
  res.send("hello world");
});

app.use(Express.json());
app.use(authRouter);

app.use(userRouter);

app.listen(8080, () => {
  console.log("running server");
});
