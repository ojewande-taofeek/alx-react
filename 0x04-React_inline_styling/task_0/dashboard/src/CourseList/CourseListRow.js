import React from 'react';
import PropTypes from 'prop-types';


const rowBgC = {
    backgroundColor: '#f5f5f5ab',
};

const headerBgC = {
    backgroundColor: '#deb5b545',
};

export default function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}) {
    return(
        <tr>
            {isHeader && !textSecondCell && (
                <th colSpan={2} style={headerBgC}>{textFirstCell}</th>
                )}
            {isHeader && textSecondCell && (
                <>
                    <th style={headerBgC}>{textFirstCell}</th>
                    <th style={headerBgC}>{textSecondCell}</th>
                </>
                )}
            {!(isHeader) && (
                <>
                    <td style={rowBgC}>{textFirstCell}</td>
                    {textSecondCell && <td style={rowBgC}>{textSecondCell}</td>}
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
