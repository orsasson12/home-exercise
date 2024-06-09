import { routes } from "../Routes";
import { Routes, Route } from "react-router-dom";
const MainContainer = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}
    </Routes>
  );
};

export default MainContainer;
