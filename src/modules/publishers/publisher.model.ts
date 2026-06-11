import { ObjectId } from "mongodb";

export interface PublisherModel {
  _id?: ObjectId;
  name: string;
  country: string;
  city: string;
  foundedYear: number;
  website: string;
  email: string;
  phone: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}