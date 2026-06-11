import { ObjectId } from "mongodb";

export interface LoanModel {
  _id?: ObjectId;
  user: ObjectId;
  book: ObjectId;
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'active' | 'returned' | 'overdue';
  fine: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}