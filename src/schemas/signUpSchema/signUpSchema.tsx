import * as z from "zod";

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const roleEnum = ["USER", "ADMIN"] as const;

export const signUpSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().min(8).regex(passwordRegex),
  confirmPassword: z.string().min(8).regex(passwordRegex),
  email: z.email().min(6),
  location: z.string().optional(),
  phoneNumber: z.number().optional(),
  linkedInURL: z.string().optional(),
  githubURL: z.string().optional(),
  portfolioURL: z.string().optional(),
  profilePicture: z.string().optional(),
  role: z.enum(roleEnum),
});
