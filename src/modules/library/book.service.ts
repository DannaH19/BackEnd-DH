import { BookRepository } from "./book.repository";
import { BookModel } from "./book.model";

export class BookService {
  private repository = new BookRepository();

  async getBooks() {
    const books = await this.repository.findAll();
    // Populate referencias
    const populatedBooks = await this.repository.populate(books, ['author', 'category', 'publisher']);
    return populatedBooks;
  }

  async getBookById(id: string) {
    const book = await this.repository.findById(id);
    if (!book) throw new Error("Libro no encontrado");
    
    const populated = await this.repository.populate([book], ['author', 'category', 'publisher']);
    return populated[0];
  }

  async createBook(book: BookModel) {
    const result = await this.repository.create(book);
    if (!result) throw new Error("Error al crear el libro");
    
    return { message: "Libro creado correctamente", book: result };
  }

  async updateBook(id: string, data: Partial<BookModel>) {
    const result = await this.repository.update(id, data);
    if (!result) throw new Error("Libro no encontrado");
    return { message: "Libro actualizado correctamente", book: result };
  }

  async deleteBook(id: string) {
    const result = await this.repository.delete(id);
    if (!result) throw new Error("Libro no encontrado");
    return { message: "Libro eliminado correctamente" };
  }

  async searchBooks(searchTerm: string) {
    const books = await this.repository.search(searchTerm);
    const populatedBooks = await this.repository.populate(books, ['author', 'category', 'publisher']);
    return populatedBooks;
  }
}