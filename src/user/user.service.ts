import { uuid } from "uuidv4";

type User = {
  id: string;
  email: string;
  password: string;
};
const users: User[] = [];

export function createUser(userData: { email: string; password: string }) {
  const id = uuid();
  users.push({
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
  return users.map((user: User) => {
    return {
      id: user.id,
      email: user.email,
    };
  });
}

export function getUser(id: string) {
  const foundUser = users.find((user: User) => user.id === id);
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
  let foundUserIndex = -1;
  foundUserIndex = users.findIndex((user: User) => user.id === id);
  console.log(foundUserIndex);

  if (foundUserIndex < 0) {
    users.slice(foundUserIndex);
    return {
      msg: "user deleted",
    };
  } else {
    return {
      msg: "user not found",
    };
  }
}
