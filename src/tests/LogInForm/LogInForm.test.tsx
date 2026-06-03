import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

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
});
