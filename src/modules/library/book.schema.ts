import { z } from 'zod';

export const createBookSchema = z.object({
  title: z.string({ message: "El título del libro es requerido" }),
  author: z.string({ message: "El ID del autor es requerido" }),
  category: z.string({ message: "El ID de la categoría es requerido" }),
  publisher: z.string({ message: "El ID de la editorial es requerido" }).optional(),
  year: z.number({ message: "El año de publicación es requerido" }),
  isbn: z.string({ message: "El ISBN es requerido" }),
  pages: z.number({ message: "El número de páginas debe ser un número" }).optional(),
  description: z.string().optional(),
  coverImage: z.string().optional(),
  totalCopies: z.number().optional(),
  location: z.string().optional(),
  tags: z.array(z.string()).optional()
});

export const updateBookSchema = z.object({
  title: z.string({ message: "El título debe ser texto" }).optional(),
  author: z.string({ message: "El autor debe ser un ID válido" }).optional(),
  category: z.string({ message: "La categoría debe ser un ID válido" }).optional(),
  publisher: z.string({ message: "La editorial debe ser un ID válido" }).optional(),
  year: z.number({ message: "El año debe ser un número" }).optional(),
  isbn: z.string({ message: "El ISBN debe ser texto" }).optional(),
  pages: z.number({ message: "Las páginas deben ser un número" }).optional(),
  description: z.string().optional(),
  coverImage: z.string().optional(),
  totalCopies: z.number().optional(),
  availableCopies: z.number().optional(),
  location: z.string().optional(),
  tags: z.array(z.string()).optional()
});