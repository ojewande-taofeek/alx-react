import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications()  {
    return (
    <div className='Notifications'>
        <div className='NoteC'>
        <p>Here is the list of notifications</p>
        <ul>
            <li data="default">New course available</li>
            <li data="urgent">New resume available</li>
            <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
        </div>
        <button style={{position: 'absolute', right: '5px', top: '2px'}}
        aria-label='Close' onClick={console.log("Close button has been clicked")}>
            <img src={closeIcon} alt="close" style={{width: '8px', height: '8px'}}/>
        </button>
    </div>
    )
}

