import React from "react";

// Importing costume components
import Input from "../Input";
import Select from "../Select";

// Importing the style file
import "../../css/HomePage.css";

// Importing variables
import { Categories } from "../../data/Categories";

// Creating the HomePage component
const HomePage = () => {
  return (
    <div className="home-container">
      <Input label="Player Name" />
      <Select label="Select category" items={Categories} />
    </div>
  );
};

// Exporting the HomePage component
export default HomePage;
