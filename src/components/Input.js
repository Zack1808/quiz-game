import React, { forwardRef } from "react";
import { UilUser } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Input.css";

// Creating the Input component
const Input = forwardRef(({ label }, ref) => {
  return (
    <div className="input-container">
      <label htmlFor="playerName">{label}</label>
      <div className="input">
        <UilUser />
        <input type="text" name="playerName" placeholder={label} />
      </div>
    </div>
  );
});

// Exporting the component
export default Input;
