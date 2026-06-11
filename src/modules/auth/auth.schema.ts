import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string({ message: "El nombre es requerido" }),
  email: z.string({ message: "El email es requerido" }),
  password: z.string({ message: "La contraseña es requerida" })
});

export const loginSchema = z.object({
  email: z.string({ message: "El email es requerido" }),
  password: z.string({ message: "La contraseña es requerida" })
});

export const updateAuthSchema = z.object({
  email: z.string({ message: "El email debe ser texto" }).optional(),
  password: z.string({ message: "La contraseña debe ser texto" }).optional()
});