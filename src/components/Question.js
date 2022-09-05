import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Imoprting costume components
import ErrorMessage from './ErrorMessage';

// Importing helper functions
import { decoder } from '../helpers/decoder';
import { handleCheck, handleSelect, handleNext } from '../helpers/handleFunctions';

// Importing the css file
import '../css/Question.css'
import { Button } from '@mui/material';

// Creating the Questions component
const Question = ({ currQues, setCurrQues, questions, options, correct, setScore, score}) => {

    const [selected, setSelected] = useState();
    const [err, setErr] = useState(false);

    const history = useNavigate();

    return (
        <div className='question'>
            <h1>Question {currQues + 1}</h1>
            <div className="singleQuestion">
                <h2>{ decoder(questions[currQues].question) }</h2>
                <div className="options">
                    {err && <ErrorMessage>Please select an option</ErrorMessage>}
                    {
                        options && 
                        options.map(opt => {
                            return <button onClick={() => handleCheck(opt, setSelected, setScore, setErr, score, correct)} className={`singleOption ${selected && handleSelect(opt, selected, correct)}`} key={opt} disabled={selected}>{opt}</button>
                        })
                    }
                </div>
                <div className="controls">
                    <Button variant='contained' size='large' color='secondary' style={{width: 185}} href="/quiz-game/">Quit</Button>
                    <Button variant='contained' size='large' color='primary' style={{width: 185}} onClick={() => {handleNext(currQues, selected, setCurrQues, setSelected, setErr, history)}}>Next Question</Button>
                </div>
            </div>
        </div>
    )
};

export default Question;