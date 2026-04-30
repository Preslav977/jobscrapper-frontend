import { App } from "../App";
import { LoginForm } from "../components/LoginForm/LoginForm";
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
      {
        path: "/dashboard",
        element: <></>,
        children: [],
      },
    ],
  },
];
