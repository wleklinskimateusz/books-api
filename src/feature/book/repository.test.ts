import { BookRepository } from "./book-repository";
import { expect, test, describe } from "bun:test";

describe("BookRepository", () => {
  test("findAll empty", async () => {
    const bookRepository = new BookRepository();
    const books = (await bookRepository.findAll())._unsafeUnwrap();
    expect(books).toEqual([]);
  });
  test("findById empty", async () => {
    const bookRepository = new BookRepository();
    const bookResult = await bookRepository.findById("1");
    expect(bookResult.isOk()).toBe(false);
  });

  test("create", async () => {
    const bookRepository = new BookRepository();
    const result = (
      await bookRepository.create({
        id: "1",
        isbn: "1234567890",
        title: "",
        author: {
          id: "1",
          name: "",
        },
      })
    )._unsafeUnwrap();
    expect(result).toBeUndefined();
  });

  test("findById", async () => {
    const bookRepository = new BookRepository();
    await bookRepository.create({
      id: "1",
      isbn: "1234567890",
      title: "",
      author: {
        id: "1",
        name: "",
      },
    });
    const bookResult = await bookRepository.findById("1");
    expect(bookResult.isOk()).toBe(true);
    expect(bookResult._unsafeUnwrap().id).toBe("1");
  });
});
