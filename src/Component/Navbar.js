import React, { useState } from "react";
import "./Navbar.css";
import logo from "./Assets/logo.png";
import searchIcon from "./Assets/v6-icon.png";

export const Navbar = () => {
  const [active, setActive] = useState("nav-menu");
  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
  };
  return (
    <nav className="navbar">
      <img id="applogo" src={logo} alt="" />
      <div className="navbar-container">
        <ul className={active}>
          <li className="nav-item">
            <a href="#Overview" className="nav-link" />
            Overview
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" />
            Social Workers
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" />
            Clients
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" />
            Reporting
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" />
            Resource Management
          </li>
        </ul>
        <div>
          <input src={searchIcon} type="text" placeholder="Search" />
          {/* </button><img id="search-icon" src={searchIcon} alt="" /> */}
        </div>
      </div>
      <div onClick={navToggle} className="nav-toggler">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
