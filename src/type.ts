import { Request } from "express";
export type JwtUser = {
  id: string;
  email: string;
};

export interface IRequest extends Request {
  data: JwtUser;
}
