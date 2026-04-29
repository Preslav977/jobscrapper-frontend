import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { FormLogin } from "../../interfaces/FormTypes/FormTypes";
import { loginSchema } from "../../schemas/loginSchema/loginSchema";
import { passwordRegex } from "../../schemas/signUpSchema/signUpSchema";

export function LoginForm() {
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
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log(response);
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
        <span>{errors.email?.message}</span>
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
            Not registered yet? <a href="">Sign up</a>{" "}
          </p>
        </>
      </form>
    </>
  );
}
