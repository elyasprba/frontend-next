import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Email is not valid"),
  password: z
    .string()
    .min(10, { message: "Password must be at least 10 characters long" }),
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(13, {
      message: "Phone number must be no more than 13 characters long",
    }),
});
