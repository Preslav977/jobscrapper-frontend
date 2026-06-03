import { http, HttpResponse } from "msw";
import { localhostURL } from "../../utility/localhostURL";

export const handlers = [
  http.post(`${localhostURL}/signup`, () => {
    return HttpResponse.json(
      {
        id: 1,
        firstName: "",
        lastName: "",
        password: "12345678BG",
        confirmPassword: "12345678BG",
        location: "",
        email: "testing@abv.bg",
        phoneNumber: null,
        linkedInURL: "",
        githubURL: "",
        portfolioURL: "",
        role: "USER",
      },
      { status: 200 },
    );
  }),

  http.post(`${localhostURL}/login`, () => {
    return HttpResponse.json(
      {
        email: "testing@abv.bg",
        password: "12345678BG",
      },
      { status: 200 },
    );
  }),
];
