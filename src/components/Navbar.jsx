import React from "react";
import Logo from "../assets/logo.png";
import "./Navbar.css";

export default function () {
  return (
    <nav className="navbar">
      <img className="navbar--logo" alt="Airbnb logo" src={Logo} />
    </nav>
  );
}
