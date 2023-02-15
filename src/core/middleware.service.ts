import { IRequest } from "src/type";
import { User, userStore } from "./userstore";
// import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { NextFunction, Response } from "express";

const jwt = require("jsonwebtoken");

export async function authentication(
  req: IRequest,
  res: Response,
  _next: NextFunction
) {
  const header = req.headers["authorization"];
  if (!header) {
    res.status(402).send("Access denied1");
  }
  try {
    const decode: any = verify(header, "shhhhh");
    console.log(decode);
    const user = userStore.getById(decode.id);
    if (!user) {
      res.send("Access Denied");
    }
    req.data = decode as User;
    _next();
  } catch (e) {
    res.status(402).send(e);
  }
}
