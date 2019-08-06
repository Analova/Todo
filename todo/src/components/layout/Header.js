import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header style={header}>
        <h1>Todo App</h1>
        <Link style={link} to="/">
          Home
        </Link>

        <Link style={link} to="/about">
          About
        </Link>
      </header>
    </div>
  );
}
const link = {
  color: "white",
  padding: "20px"
};
const header = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px"
};
