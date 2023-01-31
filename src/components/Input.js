import React, { forwardRef } from "react";
import { UilUser } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Input.css";

// Creating the Input component
const Input = forwardRef(({ label = "Label" }, ref) => {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <div className="input">
        <UilUser />
        <input
          type="text"
          name={label}
          placeholder={label}
          data-name="Hello"
          ref={ref}
        />
      </div>
    </div>
  );
});

// Exporting the component
export default Input;
