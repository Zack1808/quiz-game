import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Importing the Categories list
import { Categories } from '../data/Categories';


// Importing costume made components
import ErrorMessage from './ErrorMessage';

// Importing the css file
import '../css/HomePage.css';

// Creating the Homepage component
const HomePage = ({ name, setName, fetchQuestions }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [err, setErr] = useState(false);
    
    const history = useNavigate()

    const handleSubmit = () => {
        if(!category||!difficulty||!name) {
            setErr(true);
            return
        }
        else {
            setErr(false);
            fetchQuestions(category, difficulty);
            history("/quiz-game/quiz")
        }
    }

    return (
        <div className='content'>
            <div className='settings'>
                <span>Quiz Settings</span>
                <div className="settings_select">
                    {err && <ErrorMessage> Please fill all the fields </ErrorMessage>}
                    <TextField label="Enter your name" variant='outlined' onChange={(e) => setName(e.target.value)} style={{marginBottom: 25}} />
                    <TextField select label="Select Category" variant='outlined' onChange={(e) => setCategory(e.target.value)} value={category} style={{marginBottom: 30}}>
                        {
                            Categories.map(ctg => {
                                return <MenuItem key={ctg.category} value={ctg.value}>{ctg.category}</MenuItem>
                            })
                        }
                    </TextField>
                    <TextField select label="Select Difficulty" variant='outlined' onChange={(e) => setDifficulty(e.target.value)} value={difficulty} style={{marginBottom: 30}}>
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>
                    <Button variant='contained' color='success' size="large" onClick={handleSubmit}>
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src="/quiz.svg" alt="quiz-image" className='banner'/>
        </div>
    )
};

export default HomePage;