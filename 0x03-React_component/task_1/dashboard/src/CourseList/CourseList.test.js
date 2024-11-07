import * as React from 'react';
import { render, screen } from "@testing-library/react";
import CourseList from './CourseList';

describe("tests the CourseList component", ()=> {
    it("Check that it renders CourseList component without crashing", ()=> {
        render(<CourseList />)
    })

    it("Check that it renders the 3 different rows", ()=> {
        render(<CourseList />);
        const rowNum = screen.getAllByRole("row");
        expect(rowNum.length).toBe(3);
    })

    it(`verify that CourseList renders correctly if you pass an
        empty array or if you don’t pass the listCourses property`, ()=> {
            render(<CourseList />);
        })

    it("verify that when you pass a list of courses, the component renders it correctly", ()=> {
        render(<CourseList listCourses={[{id: 1, name: 'ES6', credit: 60}, 
                        {id: 2, name: 'Webpack', credit: 20},
                        {id: 3, name: 'React', credit: 40},
                    ]}/>);
        const cell = screen.getAllByRole("cell");
        expect(cell.length).toBe(6)
        expect(screen.getByText("Webpack")).toBeInTheDocument();
    })
})
