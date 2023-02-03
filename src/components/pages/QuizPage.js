import React, { useState } from "react";

// Importing the costume made component
import Stepper from "../Stepper";
import Question from "../Question";

// Importing the style file
import "../../css/QuizPage.css";

// Importing variables
import { Steps } from "../../data/Steps";

// Creating the QuizPage component
const QuizPage = ({ questions }) => {
  // Setting up state
  const [step, setStep] = useState(0);
  const [guesses, setGuesses] = useState([]);

  // Function that will go to the next question
  const handleSelection = () => {
    setStep((prevState) => prevState + 1);
  };

  if (!questions.length) return;

  return (
    <div className="quiz-container">
      <header>
        <h3>
          Category: <span>{questions[0].category}</span>
        </h3>
      </header>
      <Stepper steps={Steps} guess={guesses} step={step} />
      {step <= 9 ? (
        <Question
          handleClick={handleSelection}
          question={questions[step]}
          setAnswer={setGuesses}
        />
      ) : null}
    </div>
  );
};

// Exporting the QuizPage component
export default QuizPage;
