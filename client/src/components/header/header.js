import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/search'>Search</Link>
                    <Link to='/item'>Item</Link>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;
