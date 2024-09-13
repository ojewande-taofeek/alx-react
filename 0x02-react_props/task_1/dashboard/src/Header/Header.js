import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
    return (
    <div className="App-header">
            <img className="h-logo" src={logo} alt="logo" /> 
            <h1 className="h-header">School dashboard</h1>
    </div>
    );
}
