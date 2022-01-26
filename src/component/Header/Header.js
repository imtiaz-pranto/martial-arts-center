import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (

        <div>
            <div className="header-conatiner">
                <div>
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/training">Training</Link>
                    <Link to="/instructor">Instructors</Link>
                    <Link to="/about-us">About Us</Link>
                </div>

            </div>
        </div>



    );
};

export default Header;