import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

    const fetchQuestions = () => {

    }

    return(
        <BrowserRouter>
            <div className="container" style={{backgroundImage: "url(./ques1.png"}}> 
                <Header title="Quiz Game" />
                <Routes>
                    <Route path="/" exact element={<HomePage name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
                    <Route path="/quiz" exact element={<QuizPage />} />
                    <Route path="/result" exact element={<ResultPage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App;