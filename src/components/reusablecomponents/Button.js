import React from "react";

const Button = ({ text, onClick, variant = "primary", disabled = false }) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
