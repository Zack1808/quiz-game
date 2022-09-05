import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Importing costume made components
import Question from './Question';

// Importing helpers
import { decoder } from '../helpers/decoder';
import { handleSchuffle } from '../helpers/handleFunctions';

// Importing the styling
import '../css/QuizPage.css'

// Creating the QuizPage component
const QuizPage = ({ name, score, questions, setScore}) => {

    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)

    // Sets the answer into the option variable every time the questions or currentQuestion change their value
    useEffect(() => {
        setOptions(questions && handleSchuffle([questions[currentQuestion]?.correct_answer, ...questions[currentQuestion]?.incorrect_answers ]));
    }, [questions, currentQuestion]);

    return (
        <div className='quiz'>
            <span className="subtitle">
                Welcome, {name}
            </span>
            {

                // Checking if the questions have loaded in, if not, displaying the loader, if yes, displaying the question and the selections
                questions ? (
                <> 
                    <div className="quizInfo">
                        <span>{questions[currentQuestion].category}</span>
                        <span>Score: {score}</span>
                    </div>
                    <Question currQues={currentQuestion} setCurrQues={setCurrentQuestion} questions={questions} options={options} correct={decoder(questions[currentQuestion]?.correct_answer)} score={score} setScore={setScore} /> 
                </>
                ) : (
                    <CircularProgress color='inherit' size={150} thickness={1} style={{ margin: 100}} />
                )
            }
        </div>
    )
};

export default QuizPage;