import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-questions">Questions? Contact us.</p>
      <div className="footer-links">
        <div className="footer-column">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>

        <div className="footer-column">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>

        <div className="footer-column">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>

        <div className="footer-column">
          <p>Media Center</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
