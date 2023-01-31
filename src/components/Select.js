import React, { forwardRef, useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Select.css";

// Creating the select component
const Select = forwardRef(({ items = [], label = "Label" }, ref) => {
  // Setting up state
  const [toggle, setToggle] = useState(false);

  return (
    <div className="select-container">
      <label htmlFor={label}>{label}</label>
      <div className="select">
        <input type="text" value="Choose a category" />
        <UilAngleDown />
      </div>
    </div>
  );
});

// exporting te Select component
export default Select;
