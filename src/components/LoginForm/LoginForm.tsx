import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { isUserLoggedInContext } from "../../context/isUserLoggedInContext";
import { userDetailsContext } from "../../context/userDetailsContext";
import type {
  BearerToken,
  FormLogin,
  FormSignUp,
} from "../../interfaces/FormInterface/FormTypes";
import { loginSchema } from "../../schemas/loginSchema/loginSchema";
import { passwordRegex } from "../../schemas/signUpSchema/signUpSchema";
import { localhostURL } from "../../utility/localhostURL";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  const [invalidCredentials, setInvalidCredentials] = useState<string>("");

  const { setIsUserLoggedIn } = useContext(isUserLoggedInContext)!;

  const { setUserDetails } = useContext(userDetailsContext)!;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  async function login(email: string, password: string) {
    const response = await fetch(`${localhostURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status >= 400) {
      setInvalidCredentials("Email or Password is incorrect!");
    }

    reset();

    const { token } = (await response.json()) as BearerToken;

    return token;
  }

  async function getUserDetails(token: string) {
    const response = await fetch(`${localhostURL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return (await response.json()) as FormSignUp;
  }

  const onSubmitLogin: SubmitHandler<FormLogin> = async (data: FormLogin) => {
    try {
      const token = await login(data.email, data.password);

      sessionStorage.setItem("token", `Bearer ${token}`);

      const user = await getUserDetails(token);

      const updateUser = { ...user, user };

      setUserDetails(updateUser);

      setIsUserLoggedIn(true);

      void navigate("/");
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

          void handleSubmit(onSubmitLogin)(event);
        }}
      >
        <div className={styles.formHeaderContainer}>
          <h1 className={styles.formHeader}>JobScraper</h1>
          <p>Welcome back! Sign in</p>
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
          {errors.email?.message || invalidCredentials}
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

        <button className={styles.submitButton} type="submit">
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
