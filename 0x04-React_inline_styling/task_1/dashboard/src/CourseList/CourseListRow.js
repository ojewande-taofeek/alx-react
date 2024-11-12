import React from 'react';
import PropTypes from 'prop-types';


const rowBgC = {
    backgroundColor: '#f5f5f5ab',
};

const headerBgC = {
    backgroundColor: '#deb5b545',
};


export default function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}) {
     const rowStyle = isHeader ? headerBgC : rowBgC;
    return(
        <tr style={rowStyle}>
            {isHeader ?
                textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell} </th>
                ) : (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
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
