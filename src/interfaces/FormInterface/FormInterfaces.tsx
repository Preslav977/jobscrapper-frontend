export type Role = "USER" | "ADMIN";

export interface FormSignUp {
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

export interface FormSignUpTakenError {
  type: string;
  value: string;
  msg: string;
}

export interface FormLogin {
  password: string;
  email: string;
}

export interface BearerToken {
  token: string;
}
