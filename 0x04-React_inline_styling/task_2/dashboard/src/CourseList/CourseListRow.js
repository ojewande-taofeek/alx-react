import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



export default function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}) {
     const rowStyle = isHeader ? listStyles.headerBgC : listStyles.rowBgC;
    return(
        <tr className={css(rowStyle)}>
            {isHeader ?
                textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell} </th>
                ) : (
                <>
                    <th>{textFirstCell}</th>
                    <th className={css(rowStyle)}>{textSecondCell}</th>
                </>
                ) 
            
                : (
                <>
                    <td>{textFirstCell}</td>
                    {textSecondCell && <td>{textSecondCell}</td>}
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};


const listStyles = StyleSheet.create({
    rowBgC: {
        backgroundColor: '#f5f5f5ab',
    },

    headerBgC: {
        backgroundColor: '#deb5b545',
        border: '0.1rem solid gray',
        borderCollapse: 'collapse',
    },
});
