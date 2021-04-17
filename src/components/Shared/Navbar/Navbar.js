import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light">

        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item ">
        //                 <a className="nav-link mr-5 text-white" href="#">Home </a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="#">About</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="#">Garden Services</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="#">Reviews</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="#">Admin</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>


        <div class="container">
            <Link class="btn btn1" to="/">Home</Link>
            {/* <button class="btn btn1">Home</button> */}

            {/* <button class="btn btn2">Login</button> */}
            <Link class="btn btn2" to="/login">Login</Link>
            {/* <button class="btn btn3">Review</button> */}
            <Link class="btn btn3" to="/dashboard">Dashboard</Link>
            {/* <button class="btn btn4">Contact Us</button> */}
            <Link class="btn btn4" to="/dashboard">Admin</Link>
            {/* <button class="btn btn5">Contact Us</button> */}
            <Link class="btn btn5" to="#">Contact Us</Link>
        </div>
    );
};

export default Navbar;