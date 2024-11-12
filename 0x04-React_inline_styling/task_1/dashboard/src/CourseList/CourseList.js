import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';
import './CourseList.css';


export default function CourseList({listCourses = []}) {
    return (
        <table id='CourseList' className={css(tableStyles.table)}>
            <thead className={css(tableStyles.thead)}>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody className={css(tableStyles.tbody)}>
                {listCourses .length > 0 ? 
                    (
                    listCourses.map((course) => <CourseListRow textFirstCell={course.name} textSecondCell={course.credit} key={course.id} />)
                    ) :
                    <CourseListRow textFirstCell='No course available yet' />}
            </tbody>

        </table>

    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}


const tableStyles = StyleSheet.create({
    table: {
        width: '80%',
        position: 'relative',
        margin: '0.1rem 0 0 2rem',
        border: '0.1rem solid gray',
        borderCollapse: 'collapse',
    },
    thead: {
        color: 'black',
        fontWeight: 'bold',
    },
    tbody: {
        color: 'rgb(84, 26, 26)',
    },
})
