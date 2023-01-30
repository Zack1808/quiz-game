import React from "react";

// Importing costume components
import Input from "../Input";

// Importing the style file
import "../../css/HomePage.css";

// Creating the HomePage component
const HomePage = () => {
  return (
    <div className="home-container">
      <Input label="Player Name" />
    </div>
  );
};

// Exporting the HomePage component
export default HomePage;
