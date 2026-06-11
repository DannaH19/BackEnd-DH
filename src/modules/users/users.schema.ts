import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string({ message: "El nombre es requerido" }),
  email: z.string({ message: "El email es requerido" }),
  password: z.string({ message: "La contraseña es requerida" }),
  role: z.string({ message: "El rol debe ser texto" }).optional()
});

export const updateUserSchema = z.object({
  name: z.string({ message: "El nombre debe ser texto" }).optional(),
  email: z.string({ message: "El email debe ser texto" }).optional(),
  password: z.string({ message: "La contraseña debe ser texto" }).optional(),
  role: z.string({ message: "El rol debe ser texto" }).optional()
});