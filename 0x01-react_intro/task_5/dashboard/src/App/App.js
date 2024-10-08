import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="h-logo" src={logo} alt="logo" /> 
        <h1 className="h-header">School dashboard</h1>
      </div>
      <div className="App-body">
        <p className="body-para">Login to access the full dashboard</p>
        <form>
          <label htmlFor="mail">Email: </label>
          <input type="email" id="mail" />
          <label htmlFor="password">   Password: </label>
          <input type="password" id="password" />
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p className="footer-para">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;