import * as z from "zod";

export const userSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const userSignUpSchema = z.object({
  name: z.string().min(4).max(30),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});
