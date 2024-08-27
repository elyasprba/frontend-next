import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Email is not valid"),
  password: z
    .string()
    .min(10, { message: "Password must be at least 10 characters long" }),
});
