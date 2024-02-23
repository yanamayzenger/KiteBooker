import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MainPage.scss";

const MainPage = () => (
  <div className="main-page">
    <div className="hero-section">
      <Header />
      <h1>Welcome to KiteBooker</h1>
      <div className="buttons-container">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
      <Footer />
    </div>
  </div>
);

export default MainPage;
