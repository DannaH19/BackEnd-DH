import { z } from 'zod';

export const createAuthorSchema = z.object({
  name: z.string({ message: "El nombre del autor es requerido" }),
  nationality: z.string({ message: "La nacionalidad debe ser texto" }).optional(),
  birthYear: z.number({ message: "El año de nacimiento debe ser un número" }).optional(),
  biography: z.string({ message: "La biografía debe ser texto" }).optional(),
  photo: z.string({ message: "La URL de la foto debe ser texto" }).optional()
});

export const updateAuthorSchema = z.object({
  name: z.string({ message: "El nombre debe ser texto" }).optional(),
  nationality: z.string({ message: "La nacionalidad debe ser texto" }).optional(),
  birthYear: z.number({ message: "El año debe ser un número" }).optional(),
  biography: z.string({ message: "La biografía debe ser texto" }).optional(),
  photo: z.string({ message: "La URL debe ser texto" }).optional()
});