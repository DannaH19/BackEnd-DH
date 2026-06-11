import { z } from 'zod';

export const createLoanSchema = z.object({
  user: z.string({
    message: "El ID del usuario es requerido"
  }),
  book: z.string({
    message: "El ID del libro es requerido"
  }),
  notes: z.string().optional()
});

export const updateLoanSchema = z.object({
  status: z.enum(['active', 'returned', 'overdue']).optional(),
  returnDate: z.string().optional(),
  fine: z.number().optional(),
  notes: z.string().optional()
});

export const returnBookSchema = z.object({
  notes: z.string().optional()
});