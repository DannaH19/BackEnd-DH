import { z } from "zod";

export const createReviewSchema = z.object({
  bookId: z.string().min(1, "El bookId es requerido"),
  userId: z.string().min(1, "El userId es requerido"),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});