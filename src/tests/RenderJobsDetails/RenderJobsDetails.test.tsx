import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

describe("render RenderJobsDetails", () => {
  it("render the details of the job", async () => {
    renderRouter({ initialEntries: ["/jobs/1"] });

    const loading = screen.getByText("Loading...");

    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    expect(screen.getByText("Company A").textContent).toMatch(/company a/i);

    expect(screen.getByText("Back to jobs").textContent).toMatch(
      /back to jobs/i,
    );

    expect(screen.getByText("JavaScript Developer").textContent).toMatch(
      /javascript developer/i,
    );

    expect(screen.getByText("Sofia").textContent).toMatch(/sofia/i);

    expect(screen.getByText("Remote").textContent).toMatch(/remote/i);

    expect(screen.getByText("Posted 10 days ago").textContent).toMatch(
      /posted 10 days ago/i,
    );

    expect(screen.getByText("Visit Job Page").textContent).toMatch(
      /visit job page/i,
    );

    expect(screen.getByText("Responsibilities").textContent).toMatch(
      /responsibilities/i,
    );

    expect(
      screen.getByText("Creating software for something").textContent,
    ).toMatch(/creating software for something/i);

    expect(screen.getByText("Updating and testing").textContent).toMatch(
      /updating and testing/i,
    );

    expect(screen.getByText("Requirements").textContent).toMatch(
      /requirements/i,
    );

    expect(
      screen.getByText("At least 1 year of JavaScript knowledge").textContent,
    ).toMatch(/at least 1 year of JavaScript knowledge/i);

    expect(screen.getByText("CSS").textContent).toMatch(/css/i);

    expect(screen.getByText("HTML").textContent).toMatch(/html/i);

    expect(screen.getByText("Benefits").textContent).toMatch(/benefits/i);

    expect(screen.getByText("Remote work").textContent).toMatch(/remote work/i);

    // screen.debug();
  });
});
