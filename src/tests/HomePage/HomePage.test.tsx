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

    // screen.debug();
  });

  it("should render one job for company B if you selected it from the dropdown", async () => {
    renderRouter({ initialEntries: ["/"] });

    const user = userEvent.setup();

    const allCompanies = screen.queryByText("All companies");

    await user.click(allCompanies!);

    await user.click(screen.queryByText("Company B")!);

    expect(screen.queryByText("Company B")?.textContent).toMatch(/company b/i);

    expect(screen.queryByText("1")?.textContent).toMatch(/1/i);

    expect(screen.queryByText("jobs")?.textContent).toMatch(/jobs/i);

    expect(screen.queryByText("React Developer")?.textContent).toMatch(
      /react developer/i,
    );

    expect(screen.queryByText("Plovdiv")?.textContent).toMatch(/plovdiv/i);

    expect(screen.queryByText("On-site")?.textContent).toMatch(/on-site/i);

    expect(screen.queryByText("Posted 1 day ago")?.textContent).toMatch(
      /posted 1 day ago/i,
    );

    // screen.debug();
  });

  it("should render one job for company A if you search for it", async () => {
    renderRouter({ initialEntries: ["/"] });

    const user = userEvent.setup();

    await user.type(screen.queryByLabelText("query")!, "javascript");

    await user.click(screen.queryByRole("button", { name: "Search" })!);

    // screen.debug();

    expect(screen.queryByText("All companies")?.textContent).toMatch(
      /all companies/i,
    );

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
  });

  it("should render one job for company B if you search for it", async () => {
    renderRouter({ initialEntries: ["/"] });

    const user = userEvent.setup();

    await user.type(screen.queryByLabelText("query")!, "react");

    await user.click(screen.queryByRole("button", { name: "Search" })!);

    // screen.debug();

    expect(screen.queryByText("All companies")?.textContent).toMatch(
      /all companies/i,
    );

    expect(screen.queryByText("1")?.textContent).toMatch(/1/i);

    expect(screen.queryByText("jobs")?.textContent).toMatch(/jobs/i);

    expect(screen.queryByText("React Developer")?.textContent).toMatch(
      /react developer/i,
    );

    expect(screen.queryByText("Plovdiv")?.textContent).toMatch(/plovdiv/i);

    expect(screen.queryByText("On-site")?.textContent).toMatch(/on-site/i);

    expect(screen.queryByText("Posted 1 day ago")?.textContent).toMatch(
      /posted 1 day ago/i,
    );
  });

  it("should render no jobs if you search for it and haven't found any", async () => {
    renderRouter({ initialEntries: ["/"] });

    const user = userEvent.setup();

    await user.type(screen.queryByLabelText("query")!, "typescript");

    await user.click(screen.queryByRole("button", { name: "Search" })!);

    // screen.debug();

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

  it("should render dashboard anchor when you click on anchor and login", async () => {
    renderRouter({ initialEntries: ["/", "/login"], initialIndex: 0 });

    const user = userEvent.setup();

    await user.click(screen.queryByText("Log In")!);

    await user.type(screen.queryByLabelText("email")!, "testing@abv.bg");

    await user.type(screen.queryByLabelText("password")!, "12345678BG");

    const logInButton = screen.queryByRole("button", { name: "Log in" });

    await user.click(logInButton!);

    expect(screen.queryByText("Dashboard")).toBeDefined();

    // screen.debug();
  });

  it("should render dashboard component when you click on anchor and login", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/dashboard"],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    await user.click(screen.queryByText("Log In")!);

    await user.type(screen.queryByLabelText("email")!, "testing@abv.bg");

    await user.type(screen.queryByLabelText("password")!, "12345678BG");

    const logInButton = screen.queryByRole("button", { name: "Log in" });

    await user.click(logInButton!);

    await user.click(screen.queryByText("Dashboard")!);

    // screen.debug();

    expect(screen.queryAllByText("null")[0]?.textContent).toMatch(/null/i);

    expect(screen.queryAllByText("testing@abv.bg")[0]?.textContent).toMatch(
      /testing@abv.bg/i,
    );

    expect(screen.queryAllByText("Home")[0]?.textContent).toMatch(/home/i);

    expect(screen.queryAllByText("Profile")[0]?.textContent).toMatch(
      /profile/i,
    );

    expect(screen.queryByText("U")?.textContent).toMatch(/u/i);

    expect(screen.queryByText("Log out")?.textContent).toMatch(/log out/i);

    expect(screen.queryByText("Profile photo")?.textContent).toMatch(
      /profile photo/i,
    );

    expect(
      screen.queryByText(
        "Upload a profile picture so companies and recruiters can recognize you more easily.",
      )?.textContent,
    ).toMatch(
      /upload a profile picture so companies and recruiters can recognize you more easily./i,
    );

    expect(screen.queryByText("Your Profile")?.textContent).toMatch(
      /your profile/i,
    );

    expect(
      screen.queryByText(
        "Fill in your basic info to complete your profile and help us tailor your experience.",
      )?.textContent,
    ).toMatch(
      /fill in your basic info to complete your profile and help us tailor your experience./i,
    );

    expect(screen.queryByText("First Name")?.textContent).toMatch(
      /first name/i,
    );

    expect(screen.queryByText("Last Name")?.textContent).toMatch(/last name/i);

    expect(screen.queryByText("Location")?.textContent).toMatch(/location/i);

    expect(screen.queryByText("Email")?.textContent).toMatch(/email/i);

    expect(screen.queryByText("Phone")?.textContent).toMatch(/phone/i);

    expect(screen.queryByText("LinkedIn URL")?.textContent).toMatch(
      /linkedin url/i,
    );

    expect(screen.queryByText("GitHub URL")?.textContent).toMatch(
      /github url/i,
    );

    expect(screen.queryByText("Portfolio URL")?.textContent).toMatch(
      /portfolio url/i,
    );

    expect(screen.queryByRole("button", { name: "Save" })).toBeDefined();

    expect(screen.queryByText("Preview")?.textContent).toMatch(/preview/i);

    expect(
      screen.queryByText(
        "This is how your profile will appear to companies and recruiters. Make sure all information is accurate and up-to-date to create a strong impression",
      )?.textContent,
    ).toMatch(
      /this is how your profile will appear to companies and recruiters. Make sure all information is accurate and up-to-date to create a strong impression/i,
    );
  });

  it("should render user photo when it is uploaded on dashboard", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/dashboard"],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    await user.click(screen.queryByText("Log In")!);

    await user.type(screen.queryByLabelText("email")!, "testing@abv.bg");

    await user.type(screen.queryByLabelText("password")!, "12345678BG");

    const logInButton = screen.queryByRole("button", { name: "Log in" });

    await user.click(logInButton!);

    await user.click(screen.queryByText("Dashboard")!);

    const input = screen.queryByLabelText("file") as HTMLInputElement;

    const file = new File(["image"], "user.png", { type: "image/png" });

    await user.upload(input, file);

    expect(input.files).not.toBe(null);

    expect(input.files).toHaveLength(1);

    expect(input.files![0]).toBe(file);

    expect(screen.queryByText("U")).toBeNull();

    // screen.debug();
  });
});
