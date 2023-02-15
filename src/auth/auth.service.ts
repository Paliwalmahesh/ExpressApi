import { compare, hash } from "bcrypt";
import { sign as jwt } from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import { userStore } from "../core/userstore";
import { User } from "../core/userstore";

export async function signup(authData: User) {
  const { email, password } = authData;
  const hasedPassword = await hash(password, 10);
  const id = uuid();
  userStore.save({
    id: id,
    email: email,
    password: hasedPassword,
  });

  return userStore.get();
}

export async function signin(authData: { email: string; password: string }) {
  const { email, password } = authData;

  const foundUser = userStore.getByEmail(email);

  if (!foundUser) {
    return "Invalid Userid";
  }
  if (!compare(password, foundUser.password)) {
    return "Invalid password";
  }
  var payLoad = {
    id: foundUser.id,
    email: foundUser.email,
  };

  const access_token = jwt(payLoad, "shhhhh");

  return access_token;
}
