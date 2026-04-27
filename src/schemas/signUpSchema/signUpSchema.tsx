import * as z from "zod";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const roleEnum = ["USER", "ADMIN"] as const;

export const signUpSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  password: z.string().min(8).regex(passwordRegex),
  confirm_password: z.string().min(8).regex(passwordRegex),
  email: z.email().min(6),
  location: z.string().optional(),
  phone_number: z.number().optional(),
  linkedInURL: z.string().optional(),
  githubURL: z.string().optional(),
  portfolioURL: z.string().optional(),
  profile_picture: z.string().optional(),
  role: z.enum(roleEnum),
});
