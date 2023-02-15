import { BookMark, bookMarkstore } from "../core/bookMarkStore";
import { IRequest, JwtUser } from "../type";
import { uuid } from "uuidv4";
import { User } from "../core/userstore";

export function save(authData: BookMark) {
  const id = uuid();
  return bookMarkstore.save({
    id: id,
    url: authData.url,
    description: authData.description,
    name: authData.name,
    userId: authData.userId,
  });
}

export function get(user: JwtUser) {
  return bookMarkstore.get(user.id);
}
export function getall() {
  return bookMarkstore.getall();
}
