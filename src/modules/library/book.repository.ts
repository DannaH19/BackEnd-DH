import { getDb } from "../../config/database";
import { BookModel } from "../library/book.model";

export class BookRepository {
  private collection() {
    return getDb().collection<BookModel>("books");
  }

  async findAll(): Promise<BookModel[]> {
    return this.collection().find().toArray();
  }

  async create(book: BookModel): Promise<BookModel | null> {
    const result = await this.collection().insertOne(book);

    return { _id: result.insertedId, ...book };
  }
}