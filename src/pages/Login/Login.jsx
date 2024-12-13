import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
import BackgroundImage from "../../components/BackgroundImage";
import Header from "../../components/Header";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <div style={{position:"absolute", zIndex:"1"}}>
      <Header />
      </div>
      
      <BackgroundImage />
      
      <div className="content">
        <div className="form-container">
          <h1>Sign In</h1>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Sign In</button>
            <p className="or">OR</p>
            <button className="sign-in-code">Use a Sign-In Code</button>
            <p className="forgot-password">Forgot password?</p>
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <div className="signDiv">
          <p className="signup">
            New to Netflix? 
            <span style={{color:"white"}} onClick={() => navigate("/")} className="signup">
              _Sign up now
            </span>
          </p>
          <p className="recaptcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span style={{color:"blue", cursor:"pointer"}}>Learn more.</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
