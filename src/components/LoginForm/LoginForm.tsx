import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import type {
  BearerToken,
  FormLogin,
} from "../../interfaces/FormTypes/FormTypes";
import { loginSchema } from "../../schemas/loginSchema/loginSchema";
import { passwordRegex } from "../../schemas/signUpSchema/signUpSchema";
import { localhostURL } from "../../utility/localhostURL";

export function LoginForm() {
  const [invalidCredentials, setInvalidCredentials] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmitLogin: SubmitHandler<FormLogin> = async (data: FormLogin) => {
    const { email, password } = data;

    try {
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

      const { token } = (await response.json()) as BearerToken;

      const bearerToken = `Bearer ${token}`;

      sessionStorage.setItem("token", bearerToken);

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

          void handleSubmit(onSubmitLogin)(event);
        }}
      >
        <h1>JobScraper</h1>
        <p>Welcome back! Sign in</p>
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
        <span>{errors.email?.message || invalidCredentials}</span>
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

        <button type="submit">Log in</button>

        <>
          <p>
            Not registered yet? <Link to="/signup">Sign up</Link>{" "}
          </p>
        </>
      </form>
    </>
  );
}
