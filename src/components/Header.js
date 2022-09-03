import React from 'react';
import { Link } from 'react-router-dom';

// Importing the Header.css file
import '../css/Header.css';

// Creating the Header component
const Header = () => {
    return (
        <div className='header'>
            <Link className='title' to="/">Quiz Game</Link>
            <hr className='divider' />
        </div>
    )
};

export default Header;