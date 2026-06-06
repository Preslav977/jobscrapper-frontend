import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";

describe("render CreateCompanyForm", () => {
  it("render the CreateCompanyForm if logged in and admin", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/dashboard", "/createCompany"],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    await user.click(screen.getByRole("link", { name: "Log In" }));

    await user.type(screen.getByLabelText("email"), "testing@abv.bg");

    await user.type(screen.getByLabelText("password"), "12345678BG");

    const logInButton = screen.getByRole("button", { name: "Log in" });

    await user.click(logInButton);

    const dashBoardLink = await screen.findByText("Dashboard");

    expect(dashBoardLink).toBeInTheDocument();

    await user.click(dashBoardLink);

    await user.click(screen.getByText("Create Company"));

    expect(screen.getByLabelText("company-legend")).toBeInTheDocument();

    expect(screen.getByText("Name").textContent).toMatch(/name/i);

    expect(screen.getByText("URL").textContent).toMatch(/url/i);

    expect(screen.getByLabelText("scrapMode")).toBeInTheDocument();

    expect(screen.getByText("Direct").textContent).toMatch(/direct/i);

    expect(screen.getByText("NAVIGATION").textContent).toMatch(/navigation/i);

    expect(screen.getByText("Fetch").textContent).toMatch(/fetch/i);

    expect(screen.getByText("JSON").textContent).toMatch(/json/i);

    expect(screen.getByLabelText("instructions-legend")).toBeInTheDocument();

    expect(screen.getByText("Container:").textContent).toMatch(/container:/i);

    expect(screen.getAllByText("Text")[0].textContent).toMatch(/text/i);

    expect(screen.getAllByText("ElementAttribute")[0].textContent).toMatch(
      /elementattribute/i,
    );

    expect(screen.getByText("Title:").textContent).toMatch(/title:/i);

    expect(screen.getByText("Location:").textContent).toMatch(/location:/i);

    expect(screen.getByText("Remote/Hybrid:").textContent).toEqual(
      "Remote/Hybrid:",
    );

    expect(screen.getByText("Date Posted:").textContent).toMatch(
      /date posted:/i,
    );

    expect(screen.getByText("Description:").textContent).toMatch(
      /description:/i,
    );

    expect(screen.getByText("Anchor Href:").textContent).toMatch(
      /anchor href:/i,
    );

    expect(screen.getByLabelText("steps-legend")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Step" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();

    screen.debug();
  });
});
