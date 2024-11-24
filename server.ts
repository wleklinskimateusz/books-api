import express from "express";
import { BookController } from "./src/feature/book/controller";
import { BookService } from "./src/feature/book/service";
import { BookRepository } from "./src/feature/book/repository";

const app = express();
const port = 8080;

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService, app);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
