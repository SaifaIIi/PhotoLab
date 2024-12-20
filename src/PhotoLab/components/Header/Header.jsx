import React from "react";
import "./header.css";

function Header({ headerText }) {
  return (
    <header>
      <h1>{headerText}</h1>
    </header>
  );
}

export default Header;
