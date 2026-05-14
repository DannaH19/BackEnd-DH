import { ObjectId } from "mongodb";

export interface AuthorModel {
  _id?: ObjectId;
  name: string;
  nationality?: string;
  birthYear?: number;
}