import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login(){
    return(
          <div className={css(logInStyle.appBody)}>
                  <p className={css(logInStyle.p)}>Login to access the full dashboard</p>
                  <form className={css(logInStyle.form)}>
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" autoComplete='true' className={css(logInStyle.input)}/>
                      <label htmlFor="password">Password:</label>
                      <input type="password" id="password" className={css(logInStyle.input)}/>
                      <button>OK</button>
                  </form>
            </div>
    )
}

const logInStyle = StyleSheet.create({
    appBody: {
        position: 'relative',
        bottom: '1rem'
    },
    p: {
        margin: '1.5rem',
    },
    form: {
        marginTop: '1.5rem',
    },
    input: {
        margin: '0 0.5rem',
    },
});
