import { RouteObject } from "react-router";
import App from "../../App";
import Chapter274 from "../all-chapters/chapter274";
import Chapter275 from "../all-chapters/chapter275";
import { Home } from "../home";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "chapter274",
        element: <Chapter274 />,
      },
      {
        path: "chapter275",
        element: <Chapter275 />,
      },
    ],
  },
];
