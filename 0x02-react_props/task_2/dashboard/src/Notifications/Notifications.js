import React from 'react';
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/closeIcon.png';
import { useState } from 'react';
import NotificationItem from './NotificationItem';

export default function Notifications() {
    const [ count, useCount ] = useState(0);
    function handleClick() {
        useCount(count + 1);
        console.log(`Close button has been clicked ${count} times`);
    }

    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="defaultPriority" value="New course available" />
                <NotificationItem type="topPriority" value="New resume available" />
                <NotificationItem html={getLatestNotification()} />
            </ul>
            <button aria-label='Close' style={{position: 'absolute', top: '1rem', right: '2.5rem'}} 
                onClick={handleClick}>
                <img src={closeIcon} alt='closeIcon' style={{width: '0.5rem', height: '0.5rem'}}/>
            </button>
        </div>
    );
}
