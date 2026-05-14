import { getDb } from "../../config/database";
import { AuthorModel } from "./author.model";
import { ObjectId } from "mongodb";

export class AuthorRepository {
  private collection() {
    return getDb().collection<AuthorModel>("authors");
  }

  async findAll(): Promise<AuthorModel[]> {
    return this.collection().find().toArray();
  }

  async create(author: AuthorModel) {
    const result = await this.collection().insertOne(author);
    return { _id: result.insertedId, ...author };
  }

  async update(id: string, data: Partial<AuthorModel>) {
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