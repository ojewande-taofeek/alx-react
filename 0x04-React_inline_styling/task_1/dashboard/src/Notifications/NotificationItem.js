import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

export default class NotificationItem extends PureComponent {
    render() {
        const { id, type, value, html, markAsRead, className } = this.props;
        return(
        <>
            <li className={css(className)} data-notification-type={type} onClick={()=> markAsRead(id)} dangerouslySetInnerHTML={html || null}>{value && !html && value}</li>
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
    className: PropTypes.object,
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: ()=> {},
    id: 0,
};

