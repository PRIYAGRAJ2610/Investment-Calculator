import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="main logo money bag" />
            <h1>Investment Calculator App</h1>
        </header>
    );
}
