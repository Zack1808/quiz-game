import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { UilQuestion } from "@iconscout/react-unicons";

// Importing costume components
import Input from "../Input";
import Select from "../Select";

// Importing the style file
import "../../css/HomePage.css";

// Importing variables
import { Categories, Difficullty } from "../../data/Categories";

// Creating the HomePage component
const HomePage = ({ handleSubmit }) => {
  // Creating the references
  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const difficultyRef = useRef(null);

  // Function that will disable the link if no categories have been selected
  const handleClick = (e) => {
    if (
      categoryRef.current.value === "Choose a category" ||
      difficultyRef.current.value === "Choose a category"
    )
      e.preventDefault();
    else {
      const category = Categories.find(
        (ctg) => ctg.category === categoryRef.current.value
      );
      const difficulty = Difficullty.find(
        (level) => level.category === difficultyRef.current.value
      );
      handleSubmit(nameRef.current.value, category.value, difficulty.value);
    }
  };

  return (
    <div className="home-container">
      <Input label="Player Name" ref={nameRef} />
      <Select label="Select category*" items={Categories} ref={categoryRef} />
      <Select
        label="Select difficulty*"
        items={Difficullty}
        ref={difficultyRef}
      />
      <Link to="/quiz" onClick={(e) => handleClick(e)}>
        <UilQuestion className="hidden" />
        Start the quiz
        <UilQuestion className="hidden" />
      </Link>
    </div>
  );
};

// Exporting the HomePage component
export default HomePage;
