import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().email('Email is not valid'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  phone_number: z
    .string()
    .regex(/^\d+$/, { message: 'Phone number must be a valid number' })
    .min(10, { message: 'Phone number must be at least 10 characters long' })
    .max(13, {
      message: 'Phone number must be no more than 13 characters long',
    }),
})
