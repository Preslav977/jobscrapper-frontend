import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { describe, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";
import { localhostURL } from "../../utility/localhostURL";
import { server } from "../mocks/server";

describe("render RenderCompanies", () => {
  it("render no companies if hasn't been created", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/companies"],
      initialIndex: 0,
    });

    server.use(
      http.get(`${localhostURL}/companies`, () => {
        return HttpResponse.json([]);
      }),
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("link", { name: "Log In" }));

    await user.type(screen.getByLabelText("email"), "testing@abv.bg");

    await user.type(screen.getByLabelText("password"), "12345678BG");

    const logInButton = screen.getByRole("button", { name: "Log in" });

    await user.click(logInButton);

    const companiesLink = await screen.findByText("Companies");

    expect(companiesLink).toBeInTheDocument();

    await user.click(companiesLink);

    expect(screen.getByText("No company found").textContent).toMatch(
      /no company found/i,
    );

    // screen.debug();
  });

  it("render the companies", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/companies"],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    await user.click(screen.getByRole("link", { name: "Log In" }));

    await user.type(screen.getByLabelText("email"), "testing@abv.bg");

    await user.type(screen.getByLabelText("password"), "12345678BG");

    const logInButton = screen.getByRole("button", { name: "Log in" });

    await user.click(logInButton);

    const companiesLink = await screen.findByText("Companies");

    expect(companiesLink).toBeInTheDocument();

    await user.click(companiesLink);

    expect(screen.getByText("Company ABC").textContent).toMatch(/company abc/i);

    expect(screen.getByText("Edit Company").textContent).toMatch(
      /edit company/i,
    );

    expect(screen.getByText("Delete Company").textContent).toMatch(
      /delete company/i,
    );

    // screen.debug();
  });

  it("render the companies clicking on edit company should render the form", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/companies"],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    await user.click(screen.getByRole("link", { name: "Log In" }));

    await user.type(screen.getByLabelText("email"), "testing@abv.bg");

    await user.type(screen.getByLabelText("password"), "12345678BG");

    const logInButton = screen.getByRole("button", { name: "Log in" });

    await user.click(logInButton);

    const companiesLink = await screen.findByText("Companies");

    expect(companiesLink).toBeInTheDocument();

    await user.click(companiesLink);

    expect(screen.getByText("Company ABC").textContent).toMatch(/company abc/i);

    await user.click(screen.getByText("Edit Company"));

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

    // screen.debug();
  });

  it("should render error when updating company if image is not png", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/companies"],
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

    const input = screen.queryByLabelText("file") as HTMLInputElement;

    const file = new File(["image"], "user.svg", { type: "image/svg" });

    await user.upload(input, file);

    expect(input.files).not.toBe(null);

    expect(input.files).toHaveLength(1);

    expect(input.files![0]).toBe(file);

    await user.click(screen.getByRole("button", { name: "Save" }));

    // screen.debug();

    expect(
      screen.getByText("Invalid file type. Only JPEG, PNG are allowed")
        .textContent,
    ).toMatch(/invalid file type. only jpeg, png are allowed/i);
  });

  it("should update company", async () => {
    renderRouter({
      initialEntries: [
        "/login",
        "/",
        "/companies",
        "/companies/1",
        "/updateCompany/1/companyID/1",
      ],
      initialIndex: 0,
    });

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("email"), "testing@abv.bg");

    await user.type(screen.getByLabelText("password"), "12345678BG");

    const logInButton = screen.getByRole("button", { name: "Log in" });

    await user.click(logInButton);

    const companiesLink = await screen.findByText("Companies");

    expect(companiesLink).toBeInTheDocument();

    await user.click(companiesLink);

    await user.click(screen.getByText("Edit Company"));

    await user.type(screen.getByLabelText("name"), "New Company");

    await user.type(screen.getByLabelText("url"), "company.com");

    const saveButton = screen.getByRole("button", { name: "Save" });

    await user.click(saveButton);

    expect(screen.queryByText("Company ABC")?.textContent).toMatch(
      /company abc/i,
    );

    expect(screen.getByText("Edit Company").textContent).toMatch(
      /edit company/i,
    );

    expect(screen.getByText("Delete Company").textContent).toMatch(
      /delete company/i,
    );

    screen.debug();
  });
});
