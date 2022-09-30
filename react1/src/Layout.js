import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";

export const TopLayout = function () {
  return (
    <div className="topLayout-wrapper">
      <nav className="topLayout-flex">
        <NavLink to="/" className="logoImg">
          <img
            src="https://thealtschool.com/wp-content/uploads/2022/01/cropped-AltSchool-Logo-1.png"
            alt="Altschoollogo"
          />
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "#555",
            textDecoration: "none",
          })}
          end
        >
          <h1 className="topLayout-nav_links">Home</h1>
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "#555",
            textDecoration: "none",
          })}
        >
          <h1 className="topLayout-nav_links">About</h1>
        </NavLink>
        <a
          href="https://github.com/michado2019?tab=repositories"
          target="_blank"
          rel="noreferrer"
          id="projects"
        >
          <h1 className="topLayout-nav_links">Projects</h1>
        </a>
      </nav>
    </div>
  );
};

export const BottomLayout = function () {
  return (
    <div className="bottomLayout-wrapper">
      <div className="bottomLayout-flex">
        <a href="https://twitter.com/Mike_Adeshina">
          <img src="twitter--icon.png" alt="img" className="bottomLayout-img" />
          <h1 className="bottomLayout-text">twitter</h1>
        </a>
      </div>
      <div className="bottomLayout-flex">
        <a href="https://github.com/michado2019">
          <img src="github--icon.png" alt="img" className="bottomLayout-img" />
          <h1 className="bottomLayout-text">github</h1>
        </a>
      </div>
      <div className="bottomLayout-flex">
        <a href="https://linkedin.com/in/michado2019">
          <img
            src="linked--in_icon.png"
            alt="img"
            className="bottomLayout-img"
          />
          <h1 className="bottomLayout-text">linkedIn</h1>
        </a>
      </div>
      <h1 className="bottomLayout-copyright">&copy; Michael Adeshina 2022</h1>
    </div>
  );
};
