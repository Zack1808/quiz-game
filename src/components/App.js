import React from 'react';

// Importing the costume made components
import Header from './Header';
import Footer from './Footer';

// Importing the styling 
import '../css/App.css';
import { BrowserRouter } from 'react-router-dom';

// Creating the App component
const App = () => {
    return(
        <BrowserRouter>
            <div className="container" style={{backgroundImage: "url(./ques1.png"}}> 
                <Header title="Quiz Game" />
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App;