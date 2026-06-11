import { z } from 'zod';

export const createReviewSchema = z.object({
  book: z.string({ message: "El ID del libro es requerido" }),
  user: z.string({ message: "El ID del usuario es requerido" }),
  rating: z.number({ message: "La calificación es requerida" }),
  comment: z.string({ message: "El comentario debe ser texto" }).optional()
});

export const updateReviewSchema = z.object({
  rating: z.number({ message: "La calificación debe ser un número" }).optional(),
  comment: z.string({ message: "El comentario debe ser texto" }).optional()
});