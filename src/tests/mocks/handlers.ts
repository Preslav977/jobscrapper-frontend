import { delay, http, HttpResponse } from "msw";
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
        id: 1,
        email: "testing@abv.bg",
        password: "12345678BG",
      },
      { status: 200 },
    );
  }),

  http.get(`${localhostURL}/users`, () => {
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

  http.get(`${localhostURL}/companies/get/jobs`, async () => {
    await delay(150);

    return HttpResponse.json(
      [
        {
          id: 1,
          title: "JavaScript Developer",
          location: "Sofia",
          remoteOrHybrid: "Remote",
          datePosted: "Posted 10 days ago",
          description: "",
          anchorHref: "developer/1",
          companyID: 1,
          company: {
            id: 1,
            name: "Company",
            logo: null,
            URL: "example.com",
            scrapMode: "NAVIGATION",
          },
        },
      ],
      { status: 200 },
    );
  }),
];
