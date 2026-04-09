import { ObjectId } from "mongodb";

export interface BookModel {
  _id?: ObjectId;
  title: string;
  author: string;
  year: number;
}