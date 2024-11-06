import React from 'react';
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/closeIcon.png';
import { useState } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({displayDrawer = false, listNotifications = []}) {
    const [ count, useCount ] = useState(1);
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
                    { listNotifications.length > 0 ? (
                        <>
                        <p>Here is the list of notifications</p>
                        <ul>
                        {listNotifications.map((notice)=> <NotificationItem type={notice.type} value={notice.value} html={notice.html} key={notice.id} />)}
                        </ul>
                        </>
                        ) : 
                        <p>No new notification for now</p>
                    }
                
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
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}
