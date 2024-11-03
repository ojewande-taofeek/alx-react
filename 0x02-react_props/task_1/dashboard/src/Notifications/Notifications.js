import React from 'react';
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/closeIcon.png';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="defaultPriority">New course available</li>
                <li data="topPriority">New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
            <button aria-label='Close' style={{position: 'absolute', top: '1rem', right: '2.5rem'}} 
                onClick={console.log("Close button has been clicked")}>
                <img src={closeIcon} alt='closeIcon' style={{width: '0.5rem', height: '0.5rem'}}/>
            </button>
        </div>
    );
}
