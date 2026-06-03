import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

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
});
