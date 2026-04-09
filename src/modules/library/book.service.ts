import { BookRepository } from "../library/book.repository";
import { BookModel } from "../library/book.model";

export class BookService {
  private repository = new BookRepository();

  async getBooks() {
    const books = await this.repository.findAll();

    return books;
  }

  async createBook(book: BookModel) {
    const result = await this.repository.create(book);

    if (!result) {
      throw new Error("Error al crear el libro");
    }

    return {
      message: "Libro creado correctamente",
      book: result,
    };
  }
}