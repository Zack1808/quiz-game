import React from "react";
import { Link } from "react-router-dom";

// Importing the style file
import "../css/Navigation.css";

// Creating the Navigation component
const Navigation = ({ setEmpty }) => {
  return (
    <header>
      <Link
        to="/"
        onClick={() => {
          setEmpty([]);
        }}
      >
        <h1>Quiz me</h1>
      </Link>
      <small>Let's see how much you know</small>
    </header>
  );
};

// Exporting the Navigation component
export default Navigation;
