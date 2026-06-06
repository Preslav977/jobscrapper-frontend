import { App } from "../App";
import { HomePage } from "../components/HomePage/HomePage";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";
import { RenderCompanies } from "../components/RenderCompanies/RenderCompanies";
import { RenderJobsDetails } from "../components/RenderJobsDetails/RenderJobsDetails";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { CreateCompanyPage } from "../pages/CreateCompanyPage/CreateCompanyPage";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { UpdateCompanyPage } from "../pages/UpdateCompanyPage/UpdateCompanyPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <SignUpForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      { path: "/", element: <HomePage /> },
      { path: "/jobs/:id", element: <RenderJobsDetails /> },

      {
        path: "/companies",
        element: (
          <ProtectRoutes requireAdmin={false}>
            <RenderCompanies />
          </ProtectRoutes>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectRoutes requireAdmin={false}>
            <Dashboard />
          </ProtectRoutes>
        ),
      },
      {
        path: "/createCompany",
        element: (
          <ProtectRoutes requireAdmin={false}>
            <CreateCompanyPage />
          </ProtectRoutes>
        ),
      },
      {
        path: "/updateCompany/:id/details/:companyID",
        element: (
          <ProtectRoutes requireAdmin={false}>
            <UpdateCompanyPage />
          </ProtectRoutes>
        ),
      },
    ],
  },
];
