export type User = {
  id: string;
  email: string;
  password: string;
};
export class UserStore {
  users: User[] = [];
  save(user: User) {
    this.users.push(user);
    return user;
  }
  delete() {}
  get() {
    return this.users;
  }
  getById(id: string) {
    return this.users.find((user: User) => user.id === id);
  }
  getByEmail(email: string) {
    return this.users.find((user: User) => user.email === email);
  }
}
export const userStore = new UserStore();
