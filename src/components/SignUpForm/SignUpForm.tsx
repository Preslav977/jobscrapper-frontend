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

import { localhostURL } from "../../utility/localhostURL";

import { Link } from "react-router-dom";

import styles from "./SignUpForm.module.css";

export function SignUpForm() {
  const [userSignUp, setUserSignUp] = useState<FormSignUp>({
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

  const [emailTakenErr, setEmailTakenErr] = useState<string>("");

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  async function signup(
    email: string,
    password: string,
    confirmPassword: string,
  ) {
    const response = await fetch(`${localhostURL}/signup`, {
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

    return (await response.json()) as FormSignUp;
  }

  function createUser(user: FormSignUp) {
    const { email, password, confirmPassword } = user;

    const userSigningUp = {
      ...userSignUp,
      email,
      password,
      confirmPassword,
    };

    setUserSignUp(userSigningUp);
  }

  const onSubmitSignUp: SubmitHandler<FormSignUp> = async (
    data: FormSignUp,
  ) => {
    try {
      const signUpUser = await signup(
        data.email,
        data.password,
        data.confirmPassword,
      );

      createUser(signUpUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.formContainer}
        onSubmit={(event) => {
          event.preventDefault();

          void handleSubmit(onSubmitSignUp)(event);
        }}
      >
        <div className={styles.formHeaderContainer}>
          <h1 className={styles.formHeader}>JobScraper</h1>
          <p>Sign up to find your dream jobs with JobScraper</p>
        </div>
        <label className={styles.formLabel} htmlFor="email">
          Email
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
        </label>

        <span className={styles.formValidationError}>
          {errors.email?.message || emailTakenErr}
        </span>
        <label className={styles.formLabel} htmlFor="password">
          Password
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
        </label>

        <span className={styles.formValidationError}>
          {errors.password?.message}
        </span>
        <label className={styles.formLabel} htmlFor="confirmPassword">
          Confirm Password
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
        </label>

        <span className={styles.formValidationError}>
          {errors.confirmPassword?.message}
        </span>

        <button className={styles.submitButton} type="submit">
          Sign Up
        </button>

        <p className={styles.anchorPara}>
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
