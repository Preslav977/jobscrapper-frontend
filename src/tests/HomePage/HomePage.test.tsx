import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

describe("render HomePage", () => {
  it("render the HomePage", () => {
    renderRouter();

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

    // screen.debug();
  });
});
