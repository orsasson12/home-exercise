import CategoryPage from "../components/category-page/CategoryPage";
import Home from "../components/home-page/Home";
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
