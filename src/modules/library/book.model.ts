import { ObjectId } from "mongodb";

export interface BookModel {
  _id?: ObjectId;
  title: string;
  author: ObjectId | string;  // Referencia a Author
  category: ObjectId | string; // Referencia a Category
  publisher?: ObjectId | string; // Referencia a Publisher (nuevo)
  year: number;
  isbn: string;
  pages: number;
  description: string;
  coverImage?: string;
  totalCopies: number;
  availableCopies: number;
  location: string; // Ubicación en biblioteca
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}