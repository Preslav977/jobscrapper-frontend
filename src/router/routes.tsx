import { App } from "../App";
import { HomePage } from "../components/HomePage/HomePage";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { CreateCompanyPage } from "../pages/CreateCompanyPage/CreateCompanyPage";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { RenderCompanies } from "../pages/RenderCompanies/RenderCompanies";
import { RenderJobsDetails } from "../pages/RenderJobsDetails/RenderJobsDetails";
import { UpdateCompanyPage } from "../pages/UpdateCompanyPage/UpdateCompanyPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
          <ProtectRoutes requireAdmin={true}>
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
          <ProtectRoutes requireAdmin={true}>
            <CreateCompanyPage />
          </ProtectRoutes>
        ),
      },
      {
        path: "/updateCompany/:id/companyID/:companyID",
        element: (
          <ProtectRoutes requireAdmin={true}>
            <UpdateCompanyPage />
          </ProtectRoutes>
        ),
      },
    ],
  },
];
