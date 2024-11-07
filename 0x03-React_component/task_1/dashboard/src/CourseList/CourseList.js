import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import "./CourseList.css";
import CourseShape from './CourseShape';


export default function CourseList({listCourses = []}) {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
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
