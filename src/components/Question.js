import React, { useState, useEffect } from "react";
import {
  UilQuestion,
  UilPower,
  UilAngleRightB,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

// Importing the style file
import "../css/Question.css";

// Importing the helper functions
import { decoder } from "../helpers/decoder";
import { handleSchuffle, handleSelect } from "../helpers/handleFunctions";

// Creating the Questions component
const Question = ({ handleClick, question, setAnswer }) => {
  // Creating state to check if a selection has been made
  const [selected, setSelected] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Creating a list of options for the questions
    setOptions(
      handleSchuffle([question?.correct_answer, ...question?.incorrect_answers])
    );
  }, [question]);

  // Function that will set the selected option
  const handleSelection = (option) => {
    setSelected(option);
    setAnswer((prevState) => [
      ...prevState,
      option === decoder(question.correct_answer),
    ]);
  };

  // Function that will reset the buttons
  const click = () => {
    setSelected("");
    handleClick();
  };

  return (
    <div className="question-container">
      <h2>{decoder(question.question)}</h2>
      <div className="answers">
        {options.map((option) => (
          <button
            key={option}
            disabled={selected ? true : false}
            onClick={() => handleSelection(option)}
            className={
              selected
                ? handleSelect(
                    option,
                    selected,
                    decoder(question.correct_answer)
                  )
                : ""
            }
          >
            <UilQuestion className="hidden" />
            {decoder(option)}
            <UilQuestion className="hidden" />
          </button>
        ))}
      </div>
      <div className="question-buttons">
        <Link to="/" className="btn">
          <UilQuestion className="hidden" />
          <span>
            <UilPower /> Quit
          </span>
          <UilQuestion className="hidden" />
        </Link>
        <button
          disabled={selected ? false : true}
          className="btn"
          onClick={click}
        >
          <UilQuestion className="hidden" />
          <span>
            Next Question <UilAngleRightB />
          </span>
          <UilQuestion className="hidden" />
        </button>
      </div>
    </div>
  );
};

// Exporting the Question component
export default Question;
