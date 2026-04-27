import type { FormComponentInterface } from "../../interfaces/FormComponentInterface/FormComponentInterface";

export function FormComponent({ signOrLoginForm }: FormComponentInterface) {
  return (
    <>
      <form action="">
        <h1>JobScraper</h1>
        <p>
          {signOrLoginForm
            ? "Sign up to find your dream jobs with JobScraper"
            : "Welcome back! Sign in."}
        </p>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" />
        {signOrLoginForm ? (
          <>
            <label htmlFor="confirm_password"></label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
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
