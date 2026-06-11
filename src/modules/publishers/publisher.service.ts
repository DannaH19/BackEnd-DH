import { PublisherRepository } from "./publisher.repository";
import { PublisherModel } from "./publisher.model";

export class PublisherService {
  private repository = new PublisherRepository();
    getPublisherById: any;

  async getPublishers() {
    return await this.repository.findAll();
  }

  async createPublisher(publisher: PublisherModel) {
    publisher.createdAt = new Date();
    publisher.updatedAt = new Date();
    const result = await this.repository.create(publisher);
    if (!result) throw new Error("Error al crear editorial");
    return { message: "Editorial creada correctamente", publisher: result };
  }

  async updatePublisher(id: string, data: Partial<PublisherModel>) {
    data.updatedAt = new Date();
    const result = await this.repository.update(id, data);
    if (!result) throw new Error("Editorial no encontrada");
    return { message: "Editorial actualizada correctamente", publisher: result };
  }

  async deletePublisher(id: string) {
    const result = await this.repository.delete(id);
    if (!result) throw new Error("Editorial no encontrada");
    return { message: "Editorial eliminada correctamente" };
  }
}