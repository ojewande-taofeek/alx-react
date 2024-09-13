import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export default function Footer() {
    return (
    <div className="App-footer">
        <p className="footer-para">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
    );
}
