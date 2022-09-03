import React from 'react';

// Importing the costume made components
import Header from './Header'

// Importing the styling 
import '../css/App.css';
import { BrowserRouter } from 'react-router-dom';

// Creating the App component
const App = () => {
    return(
        <BrowserRouter>
            <div className="container" style={{backgroundImage: "url(./ques1.png"}}> 
                <Header />
            </div>
        </BrowserRouter>
    )
}

export default App;