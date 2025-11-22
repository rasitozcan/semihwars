import { createBrowserRouter } from "react-router";

import { Layout } from "./Layout";

import { Home } from "./Pages/Home/Home";
import { Planets } from "./Pages/Planets/Planets";
import { People } from "./Pages/People/People";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/planets",
        element: <Planets />,
      },
    ],
  },
]);
