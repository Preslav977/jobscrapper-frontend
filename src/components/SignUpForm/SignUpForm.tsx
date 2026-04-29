import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type {
  FormSignUp,
  FormSignUpTakenError,
} from "../../interfaces/FormTypes/FormTypes";
import {
  passwordRegex,
  signUpSchema,
} from "../../schemas/signUpSchema/signUpSchema";

export function SignUpForm() {
  const [userSignUp, setUserSignUp] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    location: "",
    phoneNumber: 0,
    linkedInURL: "",
    githubURL: "",
    portfolioURL: "",
    profilePicture: "",
  });

  const [emailTakenErr, setEmailTakenErr] = useState("");

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmitSignUp: SubmitHandler<FormSignUp> = async (
    data: FormSignUp,
  ) => {
    const { email, password, confirmPassword } = data;

    const userSigningUp = {
      ...userSignUp,
      email,
      password,
      confirmPassword,
    };

    setUserSignUp(userSigningUp);

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      if (response.status >= 400) {
        const result = (await response.json()) as FormSignUpTakenError;

        setEmailTakenErr(result[0].msg);
      }
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          void handleSubmit(onSubmitSignUp)(event);
        }}
      >
        <h1>JobScraper</h1>
        <p>Sign up to find your dream jobs with JobScraper</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          aria-label="email"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
            min: 6,
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <span>{errors.email?.message || emailTakenErr}</span>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          aria-label="password"
          {...register("password", {
            required: true,
            min: 8,
            pattern: passwordRegex,
          })}
        />
        <span>{errors.password?.message}</span>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: true,
            min: 8,
            validate: (value) => {
              const { password } = getValues();

              return password === value;
            },
          })}
        />
        <span>{errors.confirmPassword?.message}</span>

        <button type="submit">Sign Up</button>

        <p>
          Already registered? <a href="">Log in</a>
        </p>
      </form>
    </>
  );
}
