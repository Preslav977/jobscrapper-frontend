export type Role = "USER" | "ADMIN";

export interface FormSignUp {
  id?: number;
  firstName?: string;
  lastName?: string;
  password: string;
  confirmPassword: string;
  email: string;
  location?: string;
  phoneNumber?: number;
  linkedInURL?: string;
  githubURL?: string;
  portfolioURL?: string;
  profilePicture?: string;
  role?: Role;
}

export interface FormLogin {
  password: string;
  email: string;
}

export interface BearerToken {
  token: string;
}

export type FormUpdateUser = Omit<
  FormSignUp,
  "email" | "password" | "confirmPassword"
>;
