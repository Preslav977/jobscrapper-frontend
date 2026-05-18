import { App } from "../App";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { HomePage } from "../components/HomePage/HomePage";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";
import { RenderJobsDetails } from "../components/RenderJobsDetails/RenderJobsDetails";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";

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
        path: "dashboard",
        element: (
          <ProtectRoutes requireAdmin>
            <Dashboard />
          </ProtectRoutes>
        ),
      },
    ],
  },
];
