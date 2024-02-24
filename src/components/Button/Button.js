import React from "react";
import "./Button.scss";

const ButtonComponent = ({ title }) => {
  return <button className="custom-button">{title}</button>;
};

export default ButtonComponent;
