# jobscrapper-frontend

> React SPA for browsing and filtering scraped Developer and Engineer job listings — built with TypeScript, TanStack Query, React Hook Form, and Zod.

[![GitHub stars](https://img.shields.io/github/stars/Preslav977/jobscrapper-frontend?style=social)](https://github.com/Preslav977/jobscrapper-frontend)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

[![Star History Chart](https://api.star-history.com/svg?repos=Preslav977/jobscrapper-frontend&type=Date)](https://star-history.com/#Preslav977/jobscrapper-frontend&Date)

[Live site]() [Backend Repo](https://github.com/Preslav977/jobscrapper-backend)

<img width="1920" height="939" alt="Image" src="https://github.com/user-attachments/assets/86158f03-87fc-4fcf-9259-e922093b6eaa" />

---

## ✨ Features

| Feature             | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| ✅ Live Validation  | Per-field Zod schemas validated via React Hook Form on signup, login, company creation, and user update |
| 🔍 Job Filtering    | Filter jobs by company name (select) or by title, location, remote/hybrid (text input)                  |
| 👤 User Dashboard   | View and update profile information                                                                     |
| 🏢 Company Form     | Create or update a company with instructions, steps, and an optional image upload                       |
| 🔐 Protected Routes | `ProtectedRoute` component guards routes by checking login status and ADMIN role                        |
| ⚡ TanStack Query   | Custom hooks in `mutations/` handle all fetching and mutations with caching and invalidation            |
| 🧪 Tests            | MSW intercepts each API request during tests — no live server required                                  |

---

## 🚀 Quick Start

### Install

```bash
git clone https://github.com/Preslav977/jobscrapper-frontend.git
cd jobscrapper-frontend
npm install
```

### Configure

You don't need .env file in utility folder there's localhostURL file

### Run

```bash
npm run dev
```

> App runs on [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Architecture

```
src/
  api/            # Fetch wrappers per resource (jobs, company, user)
  assets/         # Static assets
  components/     # Reusable UI components
  context/        # Auth state via React Context
  helper/         # Shared helper functions
  interfaces/     # TypeScript interfaces
  mutations/      # TanStack Query fetch and mutation hooks
  pages/          # Route-level components (Jobs, Dashboard, Company)
  router/         # React Router definitions + ProtectedRoute
  schemas/        # Zod schemas: company, instructions, steps, jobs, login, signup
  tests/          # MSW handlers and test files
  utility/        # Shared utilities
  App.tsx         # Root component
  main.tsx        # Entry point
```

Forms are managed by React Hook Form backed by Zod schemas — validation runs per-field before any request is sent. Data fetching and mutations live in `mutations/` as TanStack Query custom hooks, keeping components free of fetch logic. `ProtectedRoute` wraps restricted routes and checks both login state and role before rendering. MSW intercepts all API calls during tests so no backend connection is needed.

---

## 🤝 Contributing

1. Reach out to me first
2. Fork → Branch → PR
3. Run `npm test` before submitting

---

## 📄 License

MIT © [Preslav977](https://github.com/Preslav977)
