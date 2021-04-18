import React from 'react';
import logo from "../../images/logo.png"
import "./Header.css"


const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop"> shop</a>
                <a href="/review"> Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/contact">Contact us</a>
            </nav>
        </div>
    );
};

export default Header;