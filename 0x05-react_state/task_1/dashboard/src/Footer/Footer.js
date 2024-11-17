import React, { Component } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render() {
        return(
            <footer className={this.props.className}>
             <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </footer>
        )
    }
}

Footer.propTypes = {
    className: PropTypes.string,
};

Footer.defaultProps = {
    className: '',
}
