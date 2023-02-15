import { query, Router } from "express";
import { BookMark } from "../core/bookMarkStore";
import { IRequest } from "src/type";
import { authentication } from "../core/middleware.service";
import { save, get } from "./bookMark.service";
import { uuid } from "uuidv4";

export const bookMarkRouter = Router();
bookMarkRouter.use(authentication);
bookMarkRouter.post("/bookmark", (req: IRequest, res, _next) => {
  const bookamrkinstance = {
    id: uuid(),
    url: req.body.url,
    description: req.body.description,
    name: req.body.name,
    userId: req.data.id,
  };
  res.status(200).send(save(bookamrkinstance));
});
bookMarkRouter.get("/bookmark", (req: IRequest, res, _next) => {
  res.status(200).send(get(req.data));
});
