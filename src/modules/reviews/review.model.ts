import { ObjectId } from "mongodb";

export interface ReviewModel {
  _id?: ObjectId;
  bookId: ObjectId;
  userId: ObjectId;
  rating: number;
  comment?: string;
}