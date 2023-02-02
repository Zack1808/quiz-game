import React from "react";

// Importing the costume made component
import Stepper from "../Stepper";

// Importing the style file
import "../../css/QuizPage.css";

// Creating the QuizPage component
const QuizPage = () => {
  // Creating list of items in stepper
  const steps = [
    { name: "Qn1", id: 1 },
    { name: "Qn2", id: 2 },
    { name: "Qn3", id: 3 },
    { name: "Qn4", id: 4 },
    { name: "Qn5", id: 5 },
    { name: "Qn6", id: 6 },
    { name: "Qn7", id: 7 },
    { name: "Qn8", id: 8 },
    { name: "Qn9", id: 9 },
    { name: "Qn10", id: 10 },
  ];

  const results = [
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
  ];

  return (
    <div className="quiz-container">
      <Stepper steps={steps} guess={results} step={1} />
    </div>
  );
};

// Exporting the QuizPage component
export default QuizPage;
