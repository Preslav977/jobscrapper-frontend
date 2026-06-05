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

  http.get(`${localhostURL}/companies/get/jobs`, () => {
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
            name: "Company A",
            logo: null,
            URL: "example.com",
            scrapMode: "NAVIGATION",
          },
        },
        {
          id: 2,
          title: "React Developer",
          location: "Plovdiv",
          remoteOrHybrid: "On-site",
          datePosted: "Posted 1 day ago",
          description: "",
          anchorHref: "react-developer/1",
          companyID: 2,
          company: {
            id: 2,
            name: "Company B",
            logo: null,
            URL: "example.com",
            scrapMode: "NAVIGATION",
          },
        },
      ],
      { status: 200 },
    );
  }),

  http.get(`${localhostURL}/companies/get/jobs/search`, ({ request }) => {
    const url = new URL(request.url);

    const query = url.searchParams.get("query");

    switch (query) {
      case "javascript": {
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
                name: "Company A",
                logo: null,
                URL: "example.com",
                scrapMode: "NAVIGATION",
              },
            },
          ],
          { status: 200 },
        );
      }

      case "react": {
        return HttpResponse.json(
          [
            {
              id: 2,
              title: "React Developer",
              location: "Plovdiv",
              remoteOrHybrid: "On-site",
              datePosted: "Posted 1 day ago",
              description: "",
              anchorHref: "react-developer/1",
              companyID: 1,
              company: {
                id: 1,
                name: "Company B",
                logo: null,
                URL: "example.com",
                scrapMode: "NAVIGATION",
              },
            },
          ],
          { status: 200 },
        );
      }

      default: {
        return HttpResponse.json([]);
      }
    }
  }),

  http.put(`${localhostURL}/users/1`, () => {
    return HttpResponse.json(
      {
        id: 1,
        firstName: "test",
        lastName: "user",
        password: "12345678BG",
        confirmPassword: "12345678BG",
        profilePicture: "image.png",
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

  http.get(`${localhostURL}/companies/jobs/1`, () => {
    return HttpResponse.json({
      id: 1,
      title: "JavaScript Developer",
      location: "Sofia",
      remoteOrHybrid: "Remote",
      datePosted: "Posted 10 days ago",
      anchorHref: "developer/1",
      formattedData: {
        responsibilities: [
          "Creating software for something",
          "Updating and testing",
        ],
        requirements: [
          "At least 1 year of JavaScript knowledge",
          "CSS",
          "HTML",
        ],
        benefits: ["Remote work"],
        other: [""],
      },
      companyID: 1,
      company: {
        id: 1,
        name: "Company A",
        logo: null,
        URL: "example.com",
        scrapMode: "NAVIGATION",
      },
    });
  }),
];
