import * as z from "zod";

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const signUpSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z
    .string()
    .min(
      8,
      "Password must be minimum 8 characters, and contain at least one letter, and one number",
    )
    .regex(
      passwordRegex,
      "Password must be minimum 8 characters, and contain at least one letter, and one number",
    ),
  confirmPassword: z
    .string()
    .min(8, "Passwords must match!")
    .regex(passwordRegex, "Passwords must match!"),
  email: z
    .email("Must be valid email!")
    .min(6, "Email must be at least 6 characters!"),
  location: z.string().optional(),
  phoneNumber: z.number().optional(),
  linkedInURL: z.string().optional(),
  githubURL: z.string().optional(),
  portfolioURL: z.string().optional(),
  profilePicture: z.string().optional(),
});
