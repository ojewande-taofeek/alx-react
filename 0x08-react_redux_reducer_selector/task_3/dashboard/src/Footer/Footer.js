import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import PropTypes, { func } from 'prop-types';
import { AppContext } from '../App/AppContext';

export default function Footer({ className }) {
     return(
        <AppContext.Consumer>{
            contextValue => (
             <footer className={className}>
             <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
             {contextValue.user.isLoggedIn &&
                    <p><a href='#'>Contact us</a></p>
                }
            </footer>
            )}
        </AppContext.Consumer>
        )
}
           

Footer.propTypes = {
    className: PropTypes.string,
};

Footer.defaultProps = {
    className: '',
}
