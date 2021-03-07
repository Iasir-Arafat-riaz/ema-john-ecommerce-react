import React from 'react';
import logo from "../../images/logo.png"
import "./Header.css"


const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;