import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}) {
    return(
        <tr>
            {isHeader && !textSecondCell && (
                <th colSpan={2}>{textFirstCell}</th>
                )}
            {isHeader && textSecondCell && (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>
                )}
            {!(isHeader) && (
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
    textSecondCell: PropTypes.string,
};

