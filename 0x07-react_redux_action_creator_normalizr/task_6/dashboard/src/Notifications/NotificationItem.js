import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class NotificationItem extends PureComponent {
    render() {
        const { id, type, value, html } = this.props;
        const typeStyle = type === 'urgent' ? listStyles.urgent: listStyles['default'];
        return(
        <>
            <li className={css([typeStyle, listStyles.small])} id={id}  data-notification-type={type} onClick={this.props.onClick} style={{cursor: 'pointer'}} dangerouslySetInnerHTML={html || null}>{value && !html && value}</li>
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
    onClick: PropTypes.func,

};

NotificationItem.defaultProps = {
    type: "default",
    id: 0,
    onClick: ()=> {},
};

const listStyles = StyleSheet.create({
    urgent: {
        color: 'red',
        fontWeight: 'bold',
    },
    'default': {
        color: 'blue',
        fontWeight: 'bold',
    },
    small: {
        '@media (max-width: 900px)': {
            borderBottom: '0.02rem solid black',
            padding: '10px 8px',
            fontSize: '20px',
        },
    },
})
