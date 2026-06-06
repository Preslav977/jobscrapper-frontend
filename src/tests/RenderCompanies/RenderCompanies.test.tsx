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
});
