import { getDb } from "../../config/database";
import { ObjectId } from "mongodb";
import { PublisherModel } from "./publisher.model";

export class PublisherRepository {
  private collection = getDb().collection<PublisherModel>('publishers');

  async findAll(query: any = {}) {
    return await this.collection.find(query).sort({ name: 1 }).toArray();
  }

  async findById(id: string) {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }

  async create(publisher: PublisherModel) {
    const result = await this.collection.insertOne(publisher);
    return { ...publisher, _id: result.insertedId };
  }

  async update(id: string, data: Partial<PublisherModel>) {
    const result = await this.collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: 'after' }
    );
    return result;
  }

  async delete(id: string) {
    const result = await this.collection.findOneAndDelete({ _id: new ObjectId(id) });
    return result;
  }
}