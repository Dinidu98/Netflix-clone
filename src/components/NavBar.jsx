import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {  FaSearch } from "react-icons/fa";

const NavBar = ({ isScrolled }) => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate =useNavigate()

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: isScrolled ? "black" : "transparent",
        zIndex: 2,
        padding: "0 4rem",
        transition: "0.3s ease-in-out",
        width:"100%",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="Logo" style={{ height: "4rem" }} />
        </div>
        <ul style={{ display: "flex", listStyleType: "none", gap: "2rem" }}>
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
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.2rem",
            paddingLeft: "0.5rem",
            ...(showSearch && {
              border: "1px solid white",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }),
          }}
        >
          <button
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaSearch style={{ color: "white", fontSize: "1.2rem" }} />
          </button>
          <input
            type="text"
            placeholder="Search"
            onBlur={() => setShowSearch(false)}
            style={{
              width: showSearch ? "100%" : "0",
              opacity: showSearch ? 1 : 0,
              visibility: showSearch ? "visible" : "hidden",
              transition: "0.3s ease-in-out",
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              padding: showSearch ? "0.3rem" : "0",
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            color:"white"
          }}
          onClick={() => navigate("/")}
        >
          Sign out
         </button>
      </div>
    </div>
  );
};

export default NavBar;
