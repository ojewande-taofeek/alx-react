import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/closeIcon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


export default class Notifications extends Component {
    constructor(props){
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }
    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`);
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    } 
    
    render() {
        const handleClick = ()=>  {
            console.log(`Close button has been clicked`);
        }
        const { displayDrawer, listNotifications } = this.props

        return( 

            <div className={css(notifyStyles.notify)}>
            <div className='menuItem'>
                <p className={css(notifyStyles.p)} onHo>Your notifications</p>
            </div>
        {displayDrawer &&
            <div className={css([notifyStyles.notification])}>
                    { listNotifications.length > 0 ? (
                        <>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.map((notice)=> (
                                
                                <NotificationItem id={notice.id} key={notice.id}
                                type={notice.type} value={notice.value} 
                                html={notice.html} markAsRead={this.markAsRead} 
                                />
                            ))}
                        </ul>
                        </>
                        ) : (
                        <p>No new notification for now</p>
                    )}
                
                    <button aria-label='Close' style={{position: 'absolute', top: '2.4rem', right: '1rem'}} 
                        onClick={handleClick}>
                        <img src={closeIcon} alt='closeIcon' style={{width: '0.5rem', height: '0.5rem'}}/>
                    </button>
            </div>
        }
        </div>
    );
}
}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

const notifyStyles = StyleSheet.create({
    notify: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
    },
    notification: {
        border: '0.1rem dotted red',
        padding: '0',
        width: '30%',
        height: 'auto',
        '@media (max-width: 900px)': {
            height: '100vh',
            width: '100vw',
            padding: '0',
            fontSize: '20px',
            backgroundColor: 'white',
            zIndex: "1000",
            position: 'fixed',
            top: '0',
            left: '0',
            border: 'none',

        },
    },
    p: {
        margin: '0.5rem 0 0 0',
        fontWeight: 'bold',
        '@media (max-width: 900px)':{
            margin: '0.5rem 1rem',
        },  
    },
});