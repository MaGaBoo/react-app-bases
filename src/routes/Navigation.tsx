import * as React from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyLoads/views/index'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React logo" className="logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Lazy1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={ <LazyPage1 /> }>
          </Route>
          <Route path="lazy2" element={ <LazyPage2 /> }>
          </Route>
          <Route path="lazy3" element={ <LazyPage3 /> }>
          </Route>
          <Route path="/*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
