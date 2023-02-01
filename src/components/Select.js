import React, { forwardRef, useState, useRef } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Select.css";

// Creating the select component
const Select = forwardRef(({ items = [], label = "Label" }, ref) => {
  // Setting up state
  const [toggle, setToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Choose a category");

  // Setting up a reference to the select component
  const selectRef = useRef(null);

  //   Setting up the delay for the items to show up
  let delay = 0.3;

  // Function for handling the click on the dropdown item
  const handleClick = (category) => {
    setToggle((prevState) => !prevState);
    setSelectedCategory(category);
  };

  // Setting up event listener to check if the user clicked outside the window
  document.addEventListener("click", (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target))
      setToggle(false);
  });

  return (
    <div className="select-container" ref={selectRef}>
      <label htmlFor={label}>{label}</label>
      <div
        className="select"
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <input type="button" value={selectedCategory} ref={ref} />
        <span className={toggle ? "rotated" : ""}>
          <UilAngleDown />
        </span>
      </div>
      <div className={`dropdown ${toggle ? "active" : ""}`}>
        {items &&
          items.map((item) => {
            delay += 0.07;
            return (
              <div
                onClick={() => handleClick(item.category)}
                className="dropdown-item"
                key={item.value}
                style={{
                  transition: toggle && `opacity .3s ${delay}s`,
                }}
              >
                {item.category}
              </div>
            );
          })}
      </div>
    </div>
  );
});

// exporting te Select component
export default Select;
