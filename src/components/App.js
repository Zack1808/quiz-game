import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing the costume made components
import Navigation from "./Navigation";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

// Exporting the App component
export default App;
