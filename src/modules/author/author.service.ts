import { AuthorRepository } from "./author.repository";
import { AuthorModel } from "./author.model";

export class AuthorService {
  private repository = new AuthorRepository();

  async getAuthors() {
    return this.repository.findAll();
  }

  async createAuthor(data: AuthorModel) {
    const result = await this.repository.create(data);
    if (!result) throw new Error("Error al crear el autor");
    return { message: "Autor creado correctamente", author: result };
  }

  async updateAuthor(id: string, data: Partial<AuthorModel>) {
    const result = await this.repository.update(id, data);
    if (!result) throw new Error("Autor no encontrado");
    return { message: "Autor actualizado correctamente", author: result };
  }

  async deleteAuthor(id: string) {
    const result = await this.repository.delete(id);
    if (!result) throw new Error("Autor no encontrado");
    return { message: "Autor eliminado correctamente" };
  }
}