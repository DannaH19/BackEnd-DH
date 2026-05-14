import { z } from "zod";

export const createAuthorSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  nationality: z.string().optional(),
  birthYear: z.number().optional(),
});