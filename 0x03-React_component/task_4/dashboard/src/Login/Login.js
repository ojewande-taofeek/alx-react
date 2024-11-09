import React from 'react';
import './Login.css';


export default function Login(){
    return(
          <div className="App-body">
                  <p>Login to access the full dashboard</p>
                  <form>
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" autoComplete='true'/>
                      <label htmlFor="password">Password:</label>
                      <input type="password" id="password" />
                      <button>OK</button>
                  </form>
            </div>
    )
}
