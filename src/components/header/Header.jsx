import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css"

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="header-container"
    >
      <div className="logo">
        <img src={logo} alt="logo" 
        />
      </div>

      {props.login ? (
        <>
          <button
            onClick={() => navigate(props.login ? "/login" : "/")}
            className="login-button"
          >
            Login
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
