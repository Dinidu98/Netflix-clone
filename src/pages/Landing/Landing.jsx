import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../components/BackgroundImage";
import Header from "../../components/header/Header";
import "./Landing.css";
import TrendingNow from "../../components/trendingNow/TrendingNow";

const Landing = () => {
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <BackgroundImage />
      <div className="contentSignup">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Starts at USD 2.99. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button onClick={handleSignIn}>
              Get Started
            </button>
          </div>
          
        </div>
        
      </div>
      <TrendingNow/>
    </div>
  );
};

export default Landing;
