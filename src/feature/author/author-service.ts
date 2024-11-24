export interface Author {
  id: string;
  name: string;
}

export interface AuthorRepository {
  findAll(): Promise<Author[]>;
  findById(id: string): Promise<Author | undefined>;
}

export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async findAll(): Promise<Author[]> {
    return this.authorRepository.findAll();
  }

  async findById(id: string): Promise<Author | undefined> {
    return this.authorRepository.findById(id);
  }
}
