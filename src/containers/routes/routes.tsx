import { RouteObject } from "react-router";
import App from "../../App";
import Chapter274 from "../all-chapters/chapter274";
import Chapter275 from "../all-chapters/chapter275";
import { Home } from "../home";
import Chapter276 from "../all-chapters/chapter276";
import Chapter277 from "../all-chapters/chapter277";
import Chapter278 from "../all-chapters/chapter278";
import Chapter279 from "../all-chapters/chapter279";
import Chapter280 from "../all-chapters/chapter280";
import Chapter281 from "../all-chapters/chapter281";
import Chapter282 from "../all-chapters/chapter282";
import Chapter283 from "../all-chapters/chapter283";
import Chapter284 from "../all-chapters/chapter284";
import Chapter285 from "../all-chapters/chapter285";
import Chapter286 from "../all-chapters/chapter286";
import Chapter287 from "../all-chapters/chapter287";
import Chapter288 from "../all-chapters/chapter288";
import Chapter289 from "../all-chapters/chapter289";
import Chapter290 from "../all-chapters/chapter290";
import Chapter291 from "../all-chapters/chapter291";
import Chapter292 from "../all-chapters/chapter292";
import Chapter293 from "../all-chapters/chapter293";

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
      {
        path: "chapter276",
        element: <Chapter276 />,
      },
      {
        path: "chapter277",
        element: <Chapter277 />,
      },
      {
        path: "chapter278",
        element: <Chapter278 />,
      },
      {
        path: "chapter279",
        element: <Chapter279 />,
      },
      {
        path: "chapter280",
        element: <Chapter280 />,
      },
      {
        path: "chapter281",
        element: <Chapter281 />,
      },
      {
        path: "chapter282",
        element: <Chapter282 />,
      },
      {
        path: "chapter283",
        element: <Chapter283 />,
      },
      {
        path: "chapter284",
        element: <Chapter284 />,
      },
      {
        path: "chapter285",
        element: <Chapter285 />,
      },
      {
        path: "chapter286",
        element: <Chapter286 />,
      },
      {
        path: "chapter287",
        element: <Chapter287 />,
      },
      {
        path: "chapter288",
        element: <Chapter288 />,
      },
      {
        path: "chapter289",
        element: <Chapter289 />,
      },
      {
        path: "chapter290",
        element: <Chapter290 />,
      },
      {
        path: "chapter291",
        element: <Chapter291 />,
      },
      {
        path: "chapter292",
        element: <Chapter292 />,
      },
      {
        path: "chapter293",
        element: <Chapter293 />,
      },
    ],
  },
];
