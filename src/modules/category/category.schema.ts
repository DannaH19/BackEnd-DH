import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string({ message: "El nombre de la categoría es requerido" }),
  description: z.string({ message: "La descripción debe ser texto" }).optional()
});

export const updateCategorySchema = z.object({
  name: z.string({ message: "El nombre debe ser texto" }).optional(),
  description: z.string({ message: "La descripción debe ser texto" }).optional()
});