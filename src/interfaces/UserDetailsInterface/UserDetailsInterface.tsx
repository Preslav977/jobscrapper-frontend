export type Role = "USER" | "ADMIN";

export interface UserDetailsInterface {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
  location: string;
  phoneNumber: number;
  linkedInURL: string;
  githubURL: string;
  portfolioURL: string;
  profilePicture: string;
  role: Role;
}
