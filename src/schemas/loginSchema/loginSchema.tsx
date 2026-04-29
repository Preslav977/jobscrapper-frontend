import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .email("Must be valid email!")
    .min(6, "Email must be at least 6 characters!"),
  password: z
    .string()
    .min(
      8,
      "Password must be minimum 8 characters, and contain at least one letter, and one number",
    ),
});
