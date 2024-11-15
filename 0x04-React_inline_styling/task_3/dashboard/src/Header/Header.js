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
    top: '5rem',
    display: 'flex',
    width: '100%',
    height: 'auto',
    },
    headerImg: {
        height: '180%',
        position: 'absolute',
        top: '-5rem',
        '@media (max-width: 900px)': {
            height: '160%',
        },
    },
    headerHeading1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '1.5rem',
        marginLeft: '15rem',
        '@media (max-width: 900px)': {
            marginLeft: '12rem',
            marginRight: '2rem'
        },
    },
});
