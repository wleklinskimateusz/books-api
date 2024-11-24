import type { Result } from "neverthrow";
import type { Author } from "../author/author-service";

export interface Book {
  id: string;
  isbn: string;
  title: string;
  author: Author;
}

export interface BookRepository {
  findAll(): Promise<Result<Book[], Error>>;
  findById(id: string): Promise<Result<Book, Error>>;
}

export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async findAll(): Promise<Result<Book[], Error>> {
    return this.bookRepository.findAll();
  }

  async findById(id: string): Promise<Result<Book | undefined, Error>> {
    return this.bookRepository.findById(id);
  }
}
