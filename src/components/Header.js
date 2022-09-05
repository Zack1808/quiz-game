import React from 'react';
import { Link } from 'react-router-dom';

// Importing the Header.css file
import '../css/Header.css';

// Creating the Header component
const Header = ({ title }) => {
    return (
        <div className='header'>
            <Link className='title' to="/">{title}</Link>
            <hr className='divider' />
        </div>
    )
};

export default Header;