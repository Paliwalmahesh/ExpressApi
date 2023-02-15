import { uuid } from "uuidv4";

import { userStore } from "../core/userstore";

export function createUser(userData: { email: string; password: string }) {
  const id = uuid();

  userStore.save({
    id,
    email: userData.email,
    password: userData.password,
  });

  return {
    id,
    email: userData.email,
  };
}

export function getUsers() {
  return userStore.get();
}

export function getUser(id: string) {
  const foundUser = userStore.getById(id);
  if (foundUser) {
    return {
      id: foundUser.id,
      email: foundUser.email,
    };
  } else {
    return {
      msg: "user not found",
    };
  }
}

export function deleteUser(id: string) {
  userStore.delete();
}
