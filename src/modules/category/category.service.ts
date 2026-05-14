import { CategoryRepository } from "./category.repository";
import { CategoryModel } from "./category.models";

export class CategoryService {
  private repository = new CategoryRepository();

  async getCategories() {
    return this.repository.findAll();
  }

  async createCategory(data: CategoryModel) {
    const result = await this.repository.create(data);
    if (!result) throw new Error("Error al crear la categoría");
    return { message: "Categoría creada correctamente", category: result };
  }

  async updateCategory(id: string, data: Partial<CategoryModel>) {
    const result = await this.repository.update(id, data);
    if (!result) throw new Error("Categoría no encontrada");
    return { message: "Categoría actualizada correctamente", category: result };
  }

  async deleteCategory(id: string) {
    const result = await this.repository.delete(id);
    if (!result) throw new Error("Categoría no encontrada");
    return { message: "Categoría eliminada correctamente" };
  }
}