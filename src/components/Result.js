import React from "react";
import { Link } from "react-router-dom";
import { UilQuestion } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Result.css";

// Creating the Result component
const Result = ({ category = "", name = "", result = [true] }) => {
  return (
    <div className="result-container">
      <h2>Result</h2>
      <div className="result-table">
        <h3>Player name:</h3>
        <p>{name}</p>
        <hr />
        <h3>Category:</h3>
        <p>{category}</p>
        <hr />
        <h3>Result:</h3>
        <p>
          {result.length ? result.filter((res) => res === true).length : "0"}
        </p>
        <hr />
      </div>
      <Link to="/">
        <UilQuestion className="hidden" />
        Return to Start
        <UilQuestion className="hidden" />
      </Link>
    </div>
  );
};

// Exporting the Result component
export default Result;
