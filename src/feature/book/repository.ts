import { ok, Result, err } from "neverthrow";
import type { Book, BookRepository as BookRepositoryShape } from "./service";

export class BookRepository implements BookRepositoryShape {
  private books: Book[] = [];
  public constructor() {
    this.books = [];
  }
  async findAll(): Promise<Result<Book[], Error>> {
    return ok(this.books);
  }
  async findById(id: string): Promise<Result<Book, Error>> {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      return err(new Error("Book not found"));
    }
    return ok(book);
  }

  async create(book: Book): Promise<Result<undefined, Error>> {
    this.books.push(book);
    return ok(undefined);
  }
}
