import React from 'react';
import logo from '../assets/holbertonLogo.jpg';
import { StyleSheet,css } from 'aphrodite';

export default function Header() {
    return(
        <header className={css(headerStyles.appHeader)}>
            <img src={logo} className={css(headerStyles.headerImg)} alt="logo" />
            <h1 className={css(headerStyles.headerHeading1)}>School dashboard</h1>
        </header>
    )
}

const headerStyles = StyleSheet.create({
   appHeader: {
    borderBottom: '3px solid  #d73953',
    color: '#d73953',
    position: 'absolute',
    top: '6rem',
    display: 'flex',
    width: '100%',
    height: '16vh',
    },
    headerImg: {
        height: '180%',
        position: 'absolute',
        top: '-5rem',
    },
    headerHeading1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '1.5rem',
        marginLeft: '15rem',
    }
});
