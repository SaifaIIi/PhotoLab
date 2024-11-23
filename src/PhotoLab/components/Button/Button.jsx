import React from "react";
import "./button.css";

function Button({ text, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
