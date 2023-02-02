import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing the costume made components
import Navigation from "./Navigation";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import Footer from "./Footer";

// Importing the fetch function
import { fetchQuestions } from "../api/fetchQuestions";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  // Setting up state
  const [playerName, setPlayerName] = useState("Player");
  const [questions, setQuestions] = useState([]);

  // Function that will setup the game
  const gameStart = (name, category, difficulty) => {
    if (name) setPlayerName(name);
    fetchQuestions(category, difficulty, setQuestions);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage handleSubmit={gameStart} />}
          />
          <Route exact path="/quiz" element={<QuizPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// Exporting the App component
export default App;
