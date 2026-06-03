import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  passwordRegex,
  signUpSchema,
} from "../../schemas/signUpSchema/signUpSchema";

import { Link } from "react-router";

import styles from "./SignUpForm.module.css";

import { useSigUpMutation } from "../../custom hooks/useSignUpMutation/userSignUpMutation";
import type { FormSignUp } from "../../interfaces/FormInterface/FormInterfaces";

export function SignUpForm() {
  const { mutate, error } = useSigUpMutation();

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: FormSignUp) => {
    mutate(data);
  };

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.formContainer}
        onSubmit={(event) => {
          event.preventDefault();

          void handleSubmit(onSubmit)(event);
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
          {errors?.email?.message || error?.message}
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
            aria-label="confirmPassword"
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
