import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {  FaSearch } from "react-icons/fa";
import "./NavBar.css"

const NavBar = ({ isScrolled }) => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate =useNavigate()

  return (
    <div
    className={`navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="navbar__left">
        <div
          className="navbar__logo"
        >
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar__links">
          <li>
            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tvShows" style={{ color: "white", textDecoration: "none" }}>
              TV Shows
            </Link>
          </li>
          <li>
            <Link to="/movies" style={{ color: "white", textDecoration: "none" }}>
              Movies
            </Link>
          </li>
          <li>
            <Link  style={{ color: "white", textDecoration: "none" }}>
              My List
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <div
          className={`navbar__search ${showSearch ? "active" : ""}`}
        >
          <button
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
            className="search__button"
          >
            <FaSearch style={{ color: "white", fontSize: "1.2rem" }} />
          </button>
          <input
            type="text"
            placeholder="Search"
            onBlur={() => setShowSearch(false)}
          
          />
        </div>
        <button
          className="signout__button"
          onClick={() => navigate("/")}
        >
          Sign out
         </button>
      </div>
    </div>
  );
};

export default NavBar;
