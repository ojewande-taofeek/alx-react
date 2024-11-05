import React from 'react';
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/closeIcon.png';
import { useState } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({displayDrawer = false}) {
    const [ count, useCount ] = useState(0);
    function handleClick() {
        useCount(count + 1);
        console.log(`Close button has been clicked ${count} times`);
    }

    return (
        <div id='Notify'>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer &&
                <div className='Notifications'>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="top" value="New resume available" />
                        <NotificationItem html= {{ __html: getLatestNotification() }} />
                    </ul>
                    <button aria-label='Close' style={{position: 'absolute', top: '4rem', right: '1rem'}} 
                        onClick={handleClick}>
                        <img src={closeIcon} alt='closeIcon' style={{width: '0.5rem', height: '0.5rem'}}/>
                    </button>
                </div>
        }
        </div>
    );
}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
}
