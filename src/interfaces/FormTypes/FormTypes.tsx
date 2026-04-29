export type FormSignUp = {
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
};

export type FormLogin = {
  password: string;
  email: string;
};

export type FormSignUpTakenError = {
  type: string;
  value: string;
  msg: string;
}[];
