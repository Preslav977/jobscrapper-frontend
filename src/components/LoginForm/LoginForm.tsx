import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import type { FormLogin } from "../../interfaces/FormInterface/FormInterfaces";
import { useLoginMutation } from "../../mutations/useLoginMutation/useLoginMutation";
import { loginSchema } from "../../schemas/loginSchema/loginSchema";
import { passwordRegex } from "../../schemas/signUpSchema/signUpSchema";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  const { mutate, error, isPending } = useLoginMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmitLogin = (data: FormLogin) => {
    mutate(data);
  };

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.formContainer}
        onSubmit={(event) => {
          event.preventDefault();

          void handleSubmit(onSubmitLogin)(event);
        }}
      >
        <div className={styles.formHeaderContainer}>
          <h1 className={styles.formHeader}>JobScraper</h1>
          <p>Welcome back! Sign in.</p>
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
          {errors.email?.message || error?.message}
        </span>
        <label className={styles.formLabel} htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            aria-label="password"
            placeholder="**********"
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

        <button
          className={styles.submitButton}
          type="submit"
          disabled={isPending ? true : false}
        >
          Log in
        </button>

        <>
          <p className={styles.anchorPara}>
            Not registered yet? <Link to="/signup">Sign up</Link>{" "}
          </p>
        </>
      </form>
    </div>
  );
}
