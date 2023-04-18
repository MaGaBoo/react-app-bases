import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Logo from "../assets/Logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React logo" className="logo" />
          <ul>
            <li>
              <NavLink to="/home" activeClassName="nav-active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="about">
            <h1>About</h1>
          </Route>
          <Route path="users">
            <h1>Users</h1>
          </Route>
          <Route path="home">
            <h1>Home</h1>
          </Route>
          <Route path="/*" />
        </Switch>
      </div>
    </Router>
  );
};