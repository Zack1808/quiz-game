import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Importing costume made components
import Question from './Question';

// Importing the styling
import '../css/QuizPage.css'

// Creating the QuizPage component
const QuizPage = ({ name, score, questions, setQuestions, setScore}) => {

    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
        setOptions(questions && handleSchuffle([questions[currentQuestion]?.correct_answer, ...questions[currentQuestion]?.incorrect_answers ]));
    }, [questions, currentQuestion]);

    const handleSchuffle = (opt) => {
        return opt.sort(() => Math.random() - 0.5)
    }

    return (
        <div className='quiz'>
            <span className="subtitle">
                Welcome, {name}
            </span>
            {
                questions ? (
                <> 
                    <div className="quizInfo">
                        <span>{questions[currentQuestion].category}</span>
                        <span>Score: {score}</span>
                    </div>
                    <Question currQues={currentQuestion} setCurrQues={setCurrentQuestion} questions={questions} options={options} correct={questions[currentQuestion]?.correct_answer} score={score} setScore={setScore} /> 
                </>
                ) : (
                    <CircularProgress color='inherit' size={150} thickness={1} style={{ margin: 100}} />
                )
            }
        </div>
    )
};

export default QuizPage;