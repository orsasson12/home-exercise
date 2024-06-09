import CategoryPage from "../pages/category-page/CategoryPage";
import Home from "../pages/home-page/Home";
import { ERoutes } from "./types";

export const routes = [
  {
    element: <Home />,
    path: ERoutes.Home,
    exact: true,
  },
  {
    element: <CategoryPage />,
    path: ERoutes.Details,
  },
];
