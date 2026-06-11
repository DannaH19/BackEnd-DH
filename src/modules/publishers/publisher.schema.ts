import { z } from 'zod';

export const createPublisherSchema = z.object({
  name: z.string({
    message: "El nombre de la editorial es requerido"
  }),
  country: z.string({
    message: "El país es requerido"
  }),
  city: z.string().optional(),
  foundedYear: z.number().optional(),
  website: z.string().optional(),
  email: z.string({
    message: "El email es requerido"
  }),
  phone: z.string().optional(),
  description: z.string().optional()
});

export const updatePublisherSchema = z.object({
  name: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  foundedYear: z.number().optional(),
  website: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  description: z.string().optional()
});