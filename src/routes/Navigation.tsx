import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { routes } from "./routes";

export const Navigation = () => {

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="React logo" className="logo" />
            <div>
              <ul>
                {routes.map((route, key) => (
                  <li key={route.path}>
                    <NavLink
                      to={route.to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <Routes>
            {routes.map((route, key) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
