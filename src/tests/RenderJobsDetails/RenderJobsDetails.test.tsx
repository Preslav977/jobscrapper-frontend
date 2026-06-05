import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

describe("render RenderJobsDetails", () => {
  it("render the details of the job", async () => {
    renderRouter({ initialEntries: ["/jobs/1"] });

    const loading = screen.getByText("Loading...");

    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    expect(screen.queryByText("Company A")!.textContent).toMatch(/company a/i);

    expect(screen.queryByText("Back to jobs")!.textContent).toMatch(
      /back to jobs/i,
    );

    expect(screen.queryByText("JavaScript Developer")!.textContent).toMatch(
      /javascript developer/i,
    );

    expect(screen.queryByText("Sofia")!.textContent).toMatch(/sofia/i);

    expect(screen.queryByText("Remote")!.textContent).toMatch(/remote/i);

    expect(screen.queryByText("Posted 10 days ago")!.textContent).toMatch(
      /posted 10 days ago/i,
    );

    expect(screen.queryByText("Visit Job Page")!.textContent).toMatch(
      /visit job page/i,
    );

    expect(screen.queryByText("Responsibilities")!.textContent).toMatch(
      /responsibilities/i,
    );

    expect(
      screen.queryByText("Creating software for something")!.textContent,
    ).toMatch(/creating software for something/i);

    expect(screen.queryByText("Updating and testing")!.textContent).toMatch(
      /updating and testing/i,
    );

    expect(screen.queryByText("Requirements")!.textContent).toMatch(
      /requirements/i,
    );

    expect(
      screen.queryByText("At least 1 year of JavaScript knowledge")!
        .textContent,
    ).toMatch(/at least 1 year of JavaScript knowledge/i);

    expect(screen.queryByText("CSS")!.textContent).toMatch(/css/i);

    expect(screen.queryByText("HTML")!.textContent).toMatch(/html/i);

    expect(screen.queryByText("Benefits")!.textContent).toMatch(/benefits/i);

    expect(screen.queryByText("Remote work")!.textContent).toMatch(
      /remote work/i,
    );

    expect(screen.queryByText("Edit Company")).not.toBeInTheDocument();

    expect(screen.queryByText("Delete Company")).not.toBeInTheDocument();

    // screen.debug();
  });

  it("should login click job render delete and edit button if an admin", async () => {
    renderRouter({
      initialEntries: ["/login", "/", "/jobs/1"],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("email"), "test@abv.bg");

    await user.type(screen.getByLabelText("password"), "12345678BG");

    const logInButton = screen.getByRole("button", { name: "Log in" });

    await user.click(logInButton);

    const homePageHeader = await screen.findByRole("heading", { level: 2 });

    expect(homePageHeader).toBeInTheDocument();

    const jobHeading = await screen.findByText("JavaScript Developer");

    expect(jobHeading).toBeInTheDocument();

    await user.click(jobHeading);

    expect(screen.queryByText("Edit Company")).toBeInTheDocument();

    expect(screen.queryByText("Delete Company")).toBeInTheDocument();

    screen.debug();
  });
});
