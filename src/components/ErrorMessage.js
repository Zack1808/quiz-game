import React from 'react';

// Importing the style file
import '../css/ErrorMessage.css'

// Creating the ErrorMessage component
const ErrorMessage = ({ children }) => {
    return (
        <div className="error_message">
            {children}
        </div>
    )
}

export default ErrorMessage;