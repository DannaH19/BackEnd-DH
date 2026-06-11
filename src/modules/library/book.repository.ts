import { getDb } from "../../config/database";
import { ObjectId } from "mongodb";
import { BookModel } from "./book.model";

export class BookRepository {
  private collection = getDb().collection<BookModel>('books');

  async findAll() {
    return await this.collection.find().sort({ title: 1 }).toArray();
  }

  async findById(id: string) {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }

  async create(book: BookModel) {
    const result = await this.collection.insertOne(book);
    return { ...book, _id: result.insertedId };
  }

  async update(id: string, data: Partial<BookModel>) {
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

  async search(searchTerm: string) {
    return await this.collection.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { isbn: { $regex: searchTerm, $options: 'i' } }
      ]
    }).toArray();
  }

  async populate(books: any[], relations: string[]) {
    const db = getDb();
    
    for (let book of books) {
      if (relations.includes('author') && book.author) {
        const authorId = typeof book.author === 'string' ? book.author : book.author;
        book.author = await db.collection('authors').findOne({ _id: new ObjectId(authorId) });
      }
      if (relations.includes('category') && book.category) {
        const categoryId = typeof book.category === 'string' ? book.category : book.category;
        book.category = await db.collection('categories').findOne({ _id: new ObjectId(categoryId) });
      }
      if (relations.includes('publisher') && book.publisher) {
        const publisherId = typeof book.publisher === 'string' ? book.publisher : book.publisher;
        book.publisher = await db.collection('publishers').findOne({ _id: new ObjectId(publisherId) });
      }
    }
    return books;
  }
}