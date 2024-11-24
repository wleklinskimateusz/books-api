import { AuthorService, type AuthorRepository } from "./author-service";
import { expect, test, describe } from "bun:test";

describe("AuthorService", () => {
  test("findAll", async () => {
    const repositoryAuthors = [
      {
        id: "1",
        name: "Test Author",
      },
    ];
    const authorService = new AuthorService({
      findAll: async () => repositoryAuthors,
      findById: async () => repositoryAuthors[0],
    });
    const authors = await authorService.findAll();
    expect(authors).toEqual(repositoryAuthors);
  });

  test("findById", async () => {
    const repositoryAuthors = [
      {
        id: "1",
        name: "Test Author",
      },
    ];
    const authorService = new AuthorService({
      findById: async () => repositoryAuthors[0],
      findAll: async () => repositoryAuthors,
    });
    const author = await authorService.findById("1");
    expect(author).toEqual(repositoryAuthors[0]);
  });
});
