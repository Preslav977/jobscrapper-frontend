import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";
import { localhostURL } from "../../utility/localhostURL";
import { server } from "../mocks/server";

describe("render LoginForm", () => {
  it("render the Login form", () => {
    renderRouter({ initialEntries: ["/login"] });

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

  it("should render errors if the inputs are empty when submitting", async () => {
    renderRouter({ initialEntries: ["/login"] });

    const user = userEvent.setup();

    const logInButton = screen.queryByRole("button", { name: "Log in" });

    await user.click(logInButton!);

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
  });

  it("should render errors if credentials are wrong", async () => {
    renderRouter({ initialEntries: ["/login"], initialIndex: 0 });

    server.use(
      http.post(`${localhostURL}/login`, () => {
        return HttpResponse.json(
          {
            message: "Email or Password is incorrect!!",
          },
          { status: 401 },
        );
      }),
    );

    const user = userEvent.setup();

    await user.type(screen.queryByLabelText("email")!, "test@abv.bg");

    await user.type(screen.queryByLabelText("password")!, "12345678BG");

    const logInButton = screen.queryByRole("button", { name: "Log in" });

    await user.click(logInButton!);

    // screen.debug();

    expect(
      screen.queryByText("Email or Password is incorrect!")?.textContent,
    ).toMatch(/email or password is incorrect!/i);
  });

  it("should render signup form when anchor is clicked", async () => {
    renderRouter({ initialEntries: ["/login", "/signup"], initialIndex: 0 });

    const user = userEvent.setup();

    const signUpButton = screen.queryByText("Sign up");

    await user.click(signUpButton!);

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

  it("should redirect to homepage if credentials are correct", async () => {
    renderRouter({ initialEntries: ["/login", "/"], initialIndex: 0 });

    const user = userEvent.setup();

    await user.type(screen.queryByLabelText("email")!, "testing@abv.bg");

    await user.type(screen.queryByLabelText("password")!, "12345678BG");

    const logInButton = screen.queryByRole("button", { name: "Log in" });

    await user.click(logInButton!);

    expect(await screen.findByText("JavaScript Developer")).toBeDefined();

    expect(screen.queryByText("Explore")?.textContent).toMatch(/explore/i);

    expect(screen.queryByText("Dashboard")?.textContent).toMatch(/dashboard/i);

    expect(screen.queryByRole("button", { name: "Search" })).toBeDefined();

    expect(screen.queryByText("All companies")?.textContent).toMatch(
      /all companies/i,
    );

    expect(screen.queryByText("1")?.textContent).toMatch(/1/i);

    expect(screen.queryByText("jobs")?.textContent).toMatch(/jobs/i);

    expect(screen.queryByText("Sofia")?.textContent).toMatch(/sofia/i);

    expect(screen.queryByText("Remote")?.textContent).toMatch(/remote/i);

    expect(screen.queryByText("Posted 10 days ago")?.textContent).toMatch(
      /posted 10 days ago/i,
    );

    // screen.debug();
  });
});
