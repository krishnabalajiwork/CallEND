import { z } from "zod";
export const eventFormSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  durationInMinutes: z.number(),
  isActive: z.boolean(),
});