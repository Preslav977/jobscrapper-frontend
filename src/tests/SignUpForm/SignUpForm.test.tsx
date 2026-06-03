import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";
import { localhostURL } from "../../utility/localhostURL";

describe("render SignUpForm", () => {
  it("render the SignUp form", () => {
    renderRouter({ initialEntries: ["/signup"] });

    // screen.debug();

    expect(screen.queryByText("JobScraper")?.textContent).toMatch(
      /jobscraper/i,
    );

    expect(
      screen.queryByText("Sign up to find your dream jobs with JobScraper")
        ?.textContent,
    ).toMatch(/sign up to find your dream jobs with JobScraper/i);

    expect(screen.queryByText("Email")?.textContent).toMatch(/email/i);

    expect(screen.queryByText("Password")?.textContent).toMatch(/password/i);

    expect(screen.queryByText("Confirm Password")?.textContent).toMatch(
      /confirm password/i,
    );

    expect(screen.queryByRole("button", { name: "Sign Up" })).toBeDefined();

    expect(screen.queryByText("Already registered?")?.textContent).toMatch(
      /already registered?/i,
    );

    expect(screen.queryByText("Log in")?.textContent).toMatch(/log in/i);
  });

  it("should render errors if the inputs are empty when submitting", async () => {
    renderRouter({ initialEntries: ["/signup"] });

    const user = userEvent.setup();

    const signUpButton = screen.queryByRole("button", { name: "Sign Up" });

    await user.click(signUpButton!);

    // screen.debug();

    expect(screen.queryByText("Must be valid email!")?.textContent).toMatch(
      /must be valid email!/i,
    );

    expect(
      screen.queryByText(
        "Password must be minimum 8 characters, and contain at least one letter, and one number",
      )?.textContent,
    ).toMatch(
      /password must be minimum 8 characters, and contain at least one letter, and one number/i,
    );

    expect(screen.queryByText("Passwords must match!")?.textContent).toMatch(
      /passwords must match!/i,
    );
  });

  it("should redirect to log in form if sign up was successful", async () => {
    renderRouter({ initialEntries: ["/signup", "/login"], initialIndex: 0 });

    const user = userEvent.setup();

    await user.type(screen.queryByLabelText("email")!, "testing@abv.bg");

    await user.type(screen.queryByLabelText("password")!, "12345678BG");

    await user.type(screen.queryByLabelText("confirmPassword")!, "12345678BG");

    const signUpButton = screen.queryByRole("button", { name: "Sign Up" });

    await user.click(signUpButton!);

    // screen.debug();

    const response = await fetch(`${localhostURL}/signup`, {
      method: "POST",
    });

    await expect(response.json()).resolves.toEqual({
      id: 1,
      firstName: "",
      lastName: "",
      password: "12345678BG",
      confirmPassword: "12345678BG",
      location: "",
      email: "testing@abv.bg",
      phoneNumber: null,
      linkedInURL: "",
      githubURL: "",
      portfolioURL: "",
      role: "USER",
    });

    expect(screen.queryByText("JobScraper")?.textContent).toMatch(
      /jobscraper/i,
    );

    expect(screen.queryByText("Welcome back! Sign in")?.textContent).toMatch(
      /welcome back! sign in/i,
    );

    expect(screen.queryByText("Email")?.textContent).toMatch(/email/i);

    expect(screen.queryByText("Password")?.textContent).toMatch(/password/i);

    expect(screen.queryByRole("button", { name: "Log in" })).toBeDefined();

    expect(screen.queryByText("Not registered yet?")?.textContent).toMatch(
      /not registered yet?/i,
    );

    expect(screen.queryByText("Sign up")?.textContent).toMatch(/sign up/i);
  });
});
