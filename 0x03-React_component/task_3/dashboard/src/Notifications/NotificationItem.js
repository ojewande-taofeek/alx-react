import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotificationItem extends Component {
    render() {
        const { id, type, value, html, markAsRead } = this.props;
        return(
        <>
            <li data-notification-type={type} onClick={()=> markAsRead(id)} dangerouslySetInnerHTML={html || null}>{value && !html && value}</li>
        </>
    );
}}
    
NotificationItem.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: ()=> {},
    id: 0,
};

