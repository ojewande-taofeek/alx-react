import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

export default class BodySectionWithMarginBottom extends Component {
    render() {
        return(
        <div  className={css(bodySectionStyle.withMargin)}>
            <BodySection {...this.props} />
        </div>
    );
}}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

const bodySectionStyle = StyleSheet.create({
    withMargin: {
        marginBottom: '40px',
    },
});
