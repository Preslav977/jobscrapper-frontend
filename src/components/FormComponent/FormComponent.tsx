import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { FormComponentInterface } from "../../interfaces/FormComponentInterface/FormComponentInterface";
import type { FormDataType } from "../../interfaces/FormDataType/FormDataType";
import {
  passwordRegex,
  signUpSchema,
} from "../../schemas/signUpSchema/signUpSchema";

export function FormComponent({ signOrLoginForm }: FormComponentInterface) {
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

  const { register, getValues, handleSubmit, reset } = useForm<FormDataType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmitSignUp: SubmitHandler<FormDataType> = async (
    data: FormDataType,
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

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={void handleSubmit(onSubmitSignUp)}>
        <h1>JobScraper</h1>
        <p>
          {signOrLoginForm
            ? "Sign up to find your dream jobs with JobScraper"
            : "Welcome back! Sign in."}
        </p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          aria-label="email"
          placeholder="Enter your email"
          {...(register("email"),
          {
            required: true,
            minLength: 6,
          })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          aria-label="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: passwordRegex,
          })}
        />
        {signOrLoginForm ? (
          <>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              {...register("confirmPassword", {
                required: true,
                minLength: 8,
                validate: (value) => {
                  const { password } = getValues();

                  return password === value;
                },
              })}
            />
          </>
        ) : (
          ""
        )}
        <button type="submit">{signOrLoginForm ? "Sign up" : "Log in"}</button>

        <p>
          {signOrLoginForm ? (
            <>
              <p>
                Already registered? <a href="">Log in</a>
              </p>
            </>
          ) : (
            <>
              <p>
                Not registered yet? <a href="">Sign up</a>{" "}
              </p>
            </>
          )}
        </p>
      </form>
    </>
  );
}
