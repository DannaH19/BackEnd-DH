import { ReviewRepository } from "./review.repository";
import { ReviewModel } from "./review.model";
import { ObjectId } from "mongodb";

export class ReviewService {
  private repository = new ReviewRepository();

  async getReviews() {
    return this.repository.findAll();
  }

  async createReview(data: any) {
    const review: ReviewModel = {
      bookId: new ObjectId(data.bookId),
      userId: new ObjectId(data.userId),
      rating: data.rating,
      comment: data.comment,
    };
    const result = await this.repository.create(review);
    if (!result) throw new Error("Error al crear la reseña");
    return { message: "Reseña creada correctamente", review: result };
  }

  async updateReview(id: string, data: Partial<ReviewModel>) {
    const result = await this.repository.update(id, data);
    if (!result) throw new Error("Reseña no encontrada");
    return { message: "Reseña actualizada correctamente", review: result };
  }

  async deleteReview(id: string) {
    const result = await this.repository.delete(id);
    if (!result) throw new Error("Reseña no encontrada");
    return { message: "Reseña eliminada correctamente" };
  }
}