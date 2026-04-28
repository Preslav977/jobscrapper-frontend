export type FormDataType = {
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

export type FormDataErrorType = {
  type: string;
  value: string;
  msg: string;
}[];
