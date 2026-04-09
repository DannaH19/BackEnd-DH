import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string().min(2),
  author: z.string().min(2),
  status: z.enum(["Leído", "Leyendo", "Pendiente"]),
});
