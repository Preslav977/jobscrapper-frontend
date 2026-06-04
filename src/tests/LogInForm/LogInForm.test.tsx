import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    screen.debug();
  });
});
