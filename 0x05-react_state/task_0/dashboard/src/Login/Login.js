import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login(){
    return(
          <div className={css(logInStyle.appBody)}>
                  <p className={css(logInStyle.p)}>Login to access the full dashboard</p>
                  <form className={css(logInStyle.form)}>
                        <span className={css(logInStyle.small)}>
                            <label htmlFor="email" >Email:</label>
                            <input type="email" id="email" autoComplete='true' className={css(logInStyle.input)}/>
                        </span>
                        <span className={css(logInStyle.small)}>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" className={css(logInStyle.input)}/>
                        </span>
                      <button className={css(logInStyle.button)}>OK</button>
                  </form>
            </div>
    )
}

const logInStyle = StyleSheet.create({
    appBody: {
        position: 'relative',
        top: '-0.8rem',
    },
    p: {
        marginLeft: '1.5rem',
        marginBottom: '1rem',
    },
    form: {
        marginTop: '0.2rem',
    },
    input: {
        margin: '0 0.5rem',
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'block',
            margin: '1.5rem',
            width: '100%',
        },
    },
    button: {
        '@media (max-width: 900px)': {
            border: '0.005rem solid brown',
        },
    },
   
});
