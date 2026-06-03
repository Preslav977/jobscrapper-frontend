import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

describe("render SignUpForm", () => {
  it("render the SignUp form", () => {
    renderRouter({ initialEntries: ["/signup"] });

    screen.debug();

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
});
