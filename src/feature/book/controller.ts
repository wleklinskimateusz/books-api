import type { BookService } from "./service";
import type { Express, Request, Response } from "express";
import { Controller } from "../../controller";

export class BookController extends Controller {
  static readonly ROUTE = "/books" as const;
  static readonly ROUTES = {
    findAll: `${BookController.ROUTE}`,
    findById: `${BookController.ROUTE}/:id`,
  } as const;

  constructor(private readonly bookService: BookService, app: Express) {
    super(app);
  }

  async findAll(req: Request, res: Response) {
    const books = await this.bookService.findAll();
    if (books.isOk()) {
      res.json(books.value);
    } else {
      res.status(500).json({ error: "Failed to fetch books" });
    }
  }

  async findById(req: Request, res: Response) {
    const id = req.params.id;
    const bookResult = await this.bookService.findById(id);
    if (bookResult.isOk()) {
      res.json(bookResult.value);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  }

  mountRoutes() {
    this.app.get(BookController.ROUTES.findAll, this.findAll);
    this.app.get(BookController.ROUTES.findById, this.findById);
  }
}
