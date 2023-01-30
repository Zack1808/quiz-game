import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing the costume made components
import Navigation from "./Navigation";
import HomePage from "./pages/HomePage";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Exporting the App component
export default App;
