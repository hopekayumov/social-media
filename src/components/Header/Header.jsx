import React from 'react';
import "./Header.css";
import Logo from "../../assets/images/Logo.svg";

function Header() {
    return (
        <div className="header">
            <a href="/">
                <img src={Logo} alt="Site Logo" />
            </a>
            <nav className="header__nav">
                <a className="header__login" href="##">Login</a>
            </nav>
        </div>
    )
}

export default Header
