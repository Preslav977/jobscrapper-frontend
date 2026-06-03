import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

interface RouterWithOptions {
  initialEntries?: string[];
  initialIndex?: number;
}

export function renderRouter(options: RouterWithOptions = {}) {
  const { initialEntries = ["/"], initialIndex } = options;

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });

  return {
    ...render(<RouterProvider router={router} />),
    routes,
  };
}
