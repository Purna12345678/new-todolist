import React from "react";
import "./Input.css";

const Input = ({ value, onChange, onKeyDown, placeholder }) => {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default Input;
