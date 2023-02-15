export type BookMark = {
  id: string;
  url: string;
  description: string;
  name: string;
  userId: string;
};
export class BookMarkStore {
  bookMarks: BookMark[] = [];
  save(user: BookMark) {
    this.bookMarks.push(user);
    return user;
  }
  delete() {}
  getall() {
    return this.bookMarks;
  }
  get(userid: string) {
    return this.bookMarks.filter((bookMarks: BookMark) => {
      if (bookMarks.userId === userid) {
        return bookMarks;
      }
    });
  }
  getById(id: string) {
    return this.bookMarks.find((bookMarks: BookMark) => bookMarks.id === id);
  }
}
export const bookMarkstore = new BookMarkStore();
