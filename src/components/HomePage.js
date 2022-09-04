import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';

// Importing the Categories list
import { Categories } from '../data/Categories';

// Importing the css file
import '../css/HomePage.css';

// Creating the Homepage component
const HomePage = () => {
    return (
        <div className='content'>
            <div className='settings'>
                <span>Quiz Settings</span>
                <div className="settings_select">
                    <TextField label="Enter your name" variant='outlined' className='field' />
                    <TextField select label="Select Category" variant='outlined' className='field'>
                        {
                            Categories.map(ctg => {
                                return <MenuItem key={ctg.category} value={ctg.value}>{ctg.category}</MenuItem>
                            })
                        }
                    </TextField>
                    <TextField select label="Select Difficulty" variant='outlined' className='field'>
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>
                    <Button variant='contained' color='success' size="large">
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src="/quiz.svg" alt="quiz-image" className='banner'/>
        </div>
    )
};

export default HomePage;