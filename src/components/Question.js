import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ErrorMessage from './ErrorMessage';

// Importing the css file
import '../css/Question.css'
import { Button } from '@mui/material';

// Creating the Questions component
const Question = ({ currQues, setCurrQues, questions, options, correct, setScore, score}) => {

    const [selected, setSelected] = useState();
    const [err, setErr] = useState(false);

    const history = useNavigate();

    const handleSelect = (op) => {
        if(selected === op && selected === correct) {
            return 'correct'
        }
        else if(selected === op && selected !== correct) return 'wrong';
        else if(op === correct) return 'correct'
    }

    const handleCheck = (op) => {
        setSelected(op);
        if(op === correct) setScore(score + 1);
        setErr(false);
    }

    const handleNext = () => {
        if(currQues > 8) history('/result');
        else if(selected) {setCurrQues(currQues + 1); setSelected();}
        else(setErr(true))
    }

    return (
        <div className='question'>
            <h1>Question {currQues + 1}</h1>
            <div className="singleQuestion">
                <h2>{ questions[currQues].question }</h2>
                <div className="options">
                    {err && <ErrorMessage>Please select an option</ErrorMessage>}
                    {
                        options && 
                        options.map(opt => {
                            return <button onClick={() => handleCheck(opt)} className={`singleOption ${selected && handleSelect(opt)}`} key={opt} disabled={selected}>{opt}</button>
                        })
                    }
                </div>
                <div className="controls">
                    <Button variant='contained' size='large' color='secondary' style={{width: 185}} href="/quiz-game/">Quit</Button>
                    <Button variant='contained' size='large' color='primary' style={{width: 185}} onClick={handleNext}>Next Question</Button>
                </div>
            </div>
        </div>
    )
};

export default Question;