import { getDb } from "../../config/database";
import { ObjectId } from "mongodb";
import { LoanModel } from "./loan.model";

export class LoanRepository {
  private collection = getDb().collection<LoanModel>('loans');

  async findAll(query: any = {}) {
    return await this.collection.find(query).sort({ loanDate: -1 }).toArray();
  }

  async findById(id: string) {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }

  async findByUser(userId: string) {
    return await this.collection.find({ user: new ObjectId(userId) }).toArray();
  }

  async findActive() {
    return await this.collection.find({ status: 'active' }).toArray();
  }

  async create(loan: LoanModel) {
    const result = await this.collection.insertOne(loan);
    return { ...loan, _id: result.insertedId };
  }

  async update(id: string, data: Partial<LoanModel>) {
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

  async populate(loans: any[], relations: string[]) {
    const db = getDb();
    
    for (let loan of loans) {
      if (relations.includes('user') && loan.user) {
        loan.user = await db.collection('users').findOne({ _id: loan.user });
      }
      if (relations.includes('book') && loan.book) {
        loan.book = await db.collection('books').findOne({ _id: loan.book });
      }
    }
    return loans;
  }
}