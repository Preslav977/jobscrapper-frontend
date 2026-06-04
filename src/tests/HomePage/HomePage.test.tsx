import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

describe("render HomePage", () => {
  it("render the HomePage", () => {
    renderRouter({ initialEntries: ["/"] });

    // screen.debug();

    expect(screen.queryByText("Explore")?.textContent).toMatch(/explore/i);

    expect(screen.queryByText("Log In")?.textContent).toMatch(/log in/i);

    expect(screen.queryByText("JobScraper")?.textContent).toMatch(
      /jobscraper/i,
    );

    expect(
      screen.queryByText("Discover your future job. All in one place.")
        ?.textContent,
    ).toMatch(/discover your future job. All in one place./i);

    expect(screen.queryByRole("button", { name: "Search" })).toBeDefined();

    expect(screen.queryByText("All companies")?.textContent).toMatch(
      /all companies/i,
    );

    expect(screen.queryByText("0")?.textContent).toMatch(/0/i);

    expect(screen.queryByText("jobs")?.textContent).toMatch(/jobs/i);

    expect(screen.queryByText("No jobs found")?.textContent).toMatch(
      /no jobs found/i,
    );

    expect(
      screen.queryByText(
        "We couldn't find any jobs that match your search. Try adjusting your filters or check back later.",
      )?.textContent,
    ).toMatch(
      /we couldn't find any jobs that match your search. Try adjusting your filters or check back later./i,
    );
  });

  it("render jobs details in HomePage", () => {
    renderRouter({ initialEntries: ["/"] });

    // screen.debug();

    expect(screen.queryByText("Explore")?.textContent).toMatch(/explore/i);

    expect(screen.queryByText("Log In")?.textContent).toMatch(/log in/i);

    expect(screen.queryByText("JobScraper")?.textContent).toMatch(
      /jobscraper/i,
    );

    expect(
      screen.queryByText("Discover your future job. All in one place.")
        ?.textContent,
    ).toMatch(/discover your future job. All in one place./i);

    expect(screen.queryByRole("button", { name: "Search" })).toBeDefined();

    expect(screen.queryByText("All companies")?.textContent).toMatch(
      /all companies/i,
    );

    expect(screen.queryByText("Explore")?.textContent).toMatch(/explore/i);

    expect(screen.queryByText("Log In")?.textContent).toMatch(/log in/i);

    expect(screen.queryByRole("button", { name: "Search" })).toBeDefined();

    expect(screen.queryByText("All companies")?.textContent).toMatch(
      /all companies/i,
    );

    expect(screen.queryByText("2")?.textContent).toMatch(/2/i);

    expect(screen.queryByText("jobs")?.textContent).toMatch(/jobs/i);

    expect(screen.queryByText("JavaScript Developer")?.textContent).toMatch(
      /javascript developer/i,
    );

    expect(screen.queryByText("Sofia")?.textContent).toMatch(/sofia/i);

    expect(screen.queryByText("Remote")?.textContent).toMatch(/remote/i);

    expect(screen.queryByText("Posted 10 days ago")?.textContent).toMatch(
      /posted 10 days ago/i,
    );

    expect(screen.queryByText("React Developer")?.textContent).toMatch(
      /react developer/i,
    );

    expect(screen.queryByText("Plovdiv")?.textContent).toMatch(/plovdiv/i);

    expect(screen.queryByText("On-site")?.textContent).toMatch(/on-site/i);

    expect(screen.queryByText("Posted 1 day ago")?.textContent).toMatch(
      /posted 1 day ago/i,
    );
  });

  it("should render one job for company A if you selected it from the dropdown", async () => {
    renderRouter({ initialEntries: ["/"] });

    const user = userEvent.setup();

    const allCompanies = screen.queryByText("All companies");

    await user.click(allCompanies!);

    await user.click(screen.queryByText("Company A")!);

    expect(screen.queryByText("Company A")?.textContent).toMatch(/company a/i);

    expect(screen.queryByText("1")?.textContent).toMatch(/1/i);

    expect(screen.queryByText("jobs")?.textContent).toMatch(/jobs/i);

    expect(screen.queryByText("JavaScript Developer")?.textContent).toMatch(
      /javascript developer/i,
    );

    expect(screen.queryByText("Sofia")?.textContent).toMatch(/sofia/i);

    expect(screen.queryByText("Remote")?.textContent).toMatch(/remote/i);

    expect(screen.queryByText("Posted 10 days ago")?.textContent).toMatch(
      /posted 10 days ago/i,
    );

    screen.debug();
  });
});
