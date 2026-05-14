import { getDb } from "../../config/database";
import { ReviewModel } from "./review.model";
import { ObjectId } from "mongodb";

export class ReviewRepository {
  private collection() {
    return getDb().collection<ReviewModel>("reviews");
  }

  async findAll(): Promise<ReviewModel[]> {
    return this.collection().find().toArray();
  }

  async create(review: ReviewModel) {
    const result = await this.collection().insertOne(review);
    return { _id: result.insertedId, ...review };
  }

  async update(id: string, data: Partial<ReviewModel>) {
    const result = await this.collection().findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: "after" }
    );
    return result;
  }

  async delete(id: string) {
    const result = await this.collection().findOneAndDelete(
      { _id: new ObjectId(id) }
    );
    return result;
  }
}