import React, { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
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
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        setQuestions(data.results)
    }

    return(
        <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
            <div className="container" style={{backgroundImage: "url(./ques1.png"}}> 
                <Header title="Quiz Game" />
                <Routes>
                    <Route path="/quiz-game/" exact element={<HomePage name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
                    <Route path="/quiz-game/quiz" exact element={<QuizPage name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
                    <Route path="/quiz-game/result" exact element={<ResultPage score={score} name={name} />} />
                </Routes>
            </div>
            <Footer />
        </HashRouter>
    )
}

export default App;