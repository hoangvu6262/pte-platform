import React from "react";
import "./styles.scss";

const Button = ({ outline, size, disabled = false, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${outline ? "outline" : ""} ${size ? "small" : ""} ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
