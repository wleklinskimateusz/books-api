import type { Express } from "express";

export abstract class Controller {
  static readonly ROUTE: string;
  static readonly ROUTES: Record<string, string>;

  constructor(protected readonly app: Express) {
    this.mountRoutes();
  }

  protected abstract mountRoutes(): void;
}
