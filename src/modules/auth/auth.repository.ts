import { getDb } from "../../config/database";
import { User } from "../users/users.model";
import { ObjectId } from "mongodb";

export class AuthRepository {
  private collection() {
    return getDb().collection<User>("users");
  }

  async findEmail(email: string) {
    return this.collection().findOne({ email });
  }

  async create(user: User) {
    const result = await this.collection().insertOne(user);
    return {
      _id: result.insertedId,
      ...user
    };
  }

  async update(id: string, data: any) {
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