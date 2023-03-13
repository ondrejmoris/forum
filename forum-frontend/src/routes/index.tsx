import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { WelcomeRoute } from "../features/landing/routes/welcome.route";

export function AppRoutes() {
  const commonRoutes: RouteObject[] = [
    {
      path: "*",
      element: <p>404 route</p>,
    },
    {
      path: "/",
      element: <WelcomeRoute />,
    },
  ];

  // Logic for which route to take
  // if (authUser) { ... add private routes ...}
  // else { ... add public routes ...}

  const router = createBrowserRouter(commonRoutes);

  return <RouterProvider router={router} />;
}
