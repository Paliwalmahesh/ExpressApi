import { query, Router } from "express";
import { createUser, deleteUser, getUser, getUsers } from "./user.service";

export const userRouter = Router();

userRouter.get("/users", (req, res, _next) => {
  res.status(200).send(getUsers());
});

userRouter.get("/users/:id", (req, res, _next) => {
  const id = req.params.id;
  console.log(id);

  res.status(200).send(getUser(id));
});

userRouter.post("/users", (req, res, _next) => {
  res.status(201).send(createUser(req.body));
});

userRouter.delete("/users/:id", (req, res, _next) => {
  const id = req.params.id;
  res.status(200).send(deleteUser(id));
});
