import { getDb } from "../../config/database";
import { CategoryModel } from "./category.models";
import { ObjectId } from "mongodb";

export class CategoryRepository {
  private collection() {
    return getDb().collection<CategoryModel>("categories");
  }

  async findAll(): Promise<CategoryModel[]> {
    return this.collection().find().toArray();
  }

  async create(category: CategoryModel) {
    const result = await this.collection().insertOne(category);
    return { _id: result.insertedId, ...category };
  }

  async update(id: string, data: Partial<CategoryModel>) {
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