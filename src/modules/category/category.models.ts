import { ObjectId } from "mongodb";

export interface CategoryModel {
  _id?: ObjectId;
  name: string;
  description?: string;
}