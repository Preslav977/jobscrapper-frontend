import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";
import { renderRouter } from "../../router/renderRouter";
import { http, HttpResponse } from "msw";
import { localhostURL } from "../../utility/localhostURL";
import { server } from "../mocks/server";

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

    // screen.debug();
  });

  it("should render company name error if condition is not met", async () => {
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

    await user.click(screen.getByRole("button", { name: "Save" }));

    expect(
      screen.getByText("Company name should be at least 1 character")
        .textContent,
    ).toMatch(/company name should be at least 1 character/i);

    screen.debug();
  });

  it("should render error if file is not an image", async () => {
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

  it("should create a company", async () => {
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

    await user.type(screen.getByLabelText("name"), "Company ABC");

    await user.type(screen.getByLabelText("url"), "example.com");

    const input = screen.queryByLabelText("file") as HTMLInputElement;

    const file = new File(["image"], "user.png", { type: "image/png" });

    await user.upload(input, file);

    expect(input.files).not.toBe(null);

    expect(input.files).toHaveLength(1);

    expect(input.files![0]).toBe(file);

    await user.click(screen.getByRole("button", { name: "Add Step" }));

    await user.click(screen.getByRole("button", { name: "Save" }));

    // screen.debug();
  });

  it("should render company name already exists", async () => {
    renderRouter({
      initialEntries: ["/", "/login", "/dashboard", "/createCompany"],
      initialIndex: 0,
    });

    server.use(
      http.post(`${localhostURL}/companies/relations`, () => {
        return HttpResponse.json(
          [
            {
              msg: "Company name already exists!",
            },
          ],
          { status: 400 },
        );
      }),
    );

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

    await user.type(screen.getByLabelText("name"), "Company A");

    await user.click(screen.getByRole("button", { name: "Save" }));

    // screen.debug();

    expect(
      screen.getByText("Company name already exists!").textContent,
    ).toMatch(/company name already exists!/i);
  });
});
