import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Importing the costume made components
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import QuizPage from './QuizPage';
import ResultPage from './ResultPage';

// Importing the styling 
import '../css/App.css';

// Creating the App component
const App = () => {

    const [name, setName] = useState("");
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);

    const fetchQuestions = async(category, difficulty) => {
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=15&category=${category}&difficulty=${difficulty}&type=multiple`);
        console.log(data);
        setQuestions(data.results)
    }

    return(
        <BrowserRouter>
            <div className="container" style={{backgroundImage: "url(./ques1.png"}}> 
                <Header title="Quiz Game" />
                <Routes>
                    <Route path="/" exact element={<HomePage name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
                    <Route path="/quiz" exact element={<QuizPage name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
                    <Route path="/result" exact element={<ResultPage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App;