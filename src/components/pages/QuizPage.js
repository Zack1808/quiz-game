import React, { useState } from "react";

// Importing the costume made component
import Stepper from "../Stepper";
import Question from "../Question";
import Result from "../Result";
import Loader from "../Loader";

// Importing the style file
import "../../css/QuizPage.css";

// Importing variables
import { Steps } from "../../data/Steps";

// Creating the QuizPage component
const QuizPage = ({ questions, player, setEmpty }) => {
  // Setting up state
  const [step, setStep] = useState(0);
  const [guesses, setGuesses] = useState([]);

  // Function that will go to the next question
  const handleSelection = () => {
    setStep((prevState) => prevState + 1);
  };

  if (!questions.length) return <Loader />;

  return (
    <div className="quiz-container">
      <header>
        <h3>{step <= 9 ? `Category: ${questions[0].category}` : null}</h3>
      </header>
      <Stepper steps={Steps} guess={guesses} step={step} />
      {step <= 9 ? (
        <Question
          handleClick={handleSelection}
          question={questions[step]}
          setAnswer={setGuesses}
          setEmpty={setEmpty}
        />
      ) : (
        <Result
          category={questions[0].category}
          result={guesses}
          difficulty={questions[0].difficulty.toUpperCase()}
          name={player}
          setEmpty={setEmpty}
        />
      )}
    </div>
  );
};

// Exporting the QuizPage component
export default QuizPage;
