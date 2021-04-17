import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       
        <div class="container">
            <Link class="btn btn1" to="/">Home</Link>
            <Link class="btn btn2" to="/login">Login</Link>
            <Link class="btn btn3" to="/dashboard">Dashboard</Link>
            <Link class="btn btn4" to="/dashboard">Admin</Link>
            <Link class="btn btn5" to="#">Contact Us</Link>
        </div>
    );
};

export default Navbar;