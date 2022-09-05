import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import { Button } from '@mui/material';

// Importing the css file
import '../css/ResultPage.css'

// Creating the ResultPage component
const ResultPage = ({ name, score }) => {

    const history = useNavigate();
    
    // Returns the user to the home page if no name was entered in the field 
    useEffect(() => {
        if(!name){
            history('/quiz-game/')
        }
    }, [name, history])

    return (
        <div className='result'>
            <span className="title">Final Score: {score}</span>
            <Button variant='contained' color='secondary' size='large' style={{ alignSelf: "center", marginTop: 20}} href="/quiz-game/">Go to Home Page</Button>
        </div>
    )
};

export default ResultPage;