import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/Images/Logo-round.png";
import "./Header.scss";

const Header = () => {
  let navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={LogoImage} alt="KiteBooker Logo" className="logo" />
        </Link>
      </div>
      <div className="navigation-buttons">
        <button className="nav-btn" onClick={() => handleNavigate("/")}>
          Home
        </button>
        <button
          className="nav-btn"
          onClick={() => handleNavigate("/KiteBooking")}
        >
          Book Lessons
        </button>
        <button
          className="nav-btn"
          onClick={() => handleNavigate("/FindSchool")}
        >
          Find Kite School
        </button>
      </div>
    </header>
  );
};

export default Header;
