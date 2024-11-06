import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({type = "default", html, value}) {
    return(
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li dangerouslySetInnerHTML={html}></li> : null}
        </>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    })};
