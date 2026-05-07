import { App } from "../App";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";
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
        index: true,
        path: "login",
        element: <LoginForm />,
      },

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
