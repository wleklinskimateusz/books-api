import { BookService, type BookRepository } from "./service";
import { expect, test, describe } from "bun:test";
import { ok } from "neverthrow";

describe("BookService", () => {
  test("findAll", async () => {
    const repositoryBooks = [
      {
        id: "1",
        isbn: "1234567890",
        title: "Test Book",
        author: {
          id: "1",
          name: "Test Author",
        },
      },
    ];
    const bookService = new BookService({
      findAll: async () => ok(repositoryBooks),
      findById: async () => ok(repositoryBooks[0]),
    });
    const books = await bookService.findAll();
    expect(books).toEqual(ok(repositoryBooks));
  });

  test("findById", async () => {
    const repositoryBooks = [
      {
        id: "1",
        isbn: "1234567890",
        title: "Test Book",
        author: {
          id: "1",
          name: "Test Author",
        },
      },
    ];
    const bookService = new BookService({
      findById: async () => ok(repositoryBooks[0]),
      findAll: async () => ok(repositoryBooks),
    });
    const book = await bookService.findById("1");
    expect(book).toEqual(ok(repositoryBooks[0]));
  });
});
