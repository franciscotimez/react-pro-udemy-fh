import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo from '../logo.svg';

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            {
              routes.map(route => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))
          }
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
