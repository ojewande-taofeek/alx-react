import * as React from 'react';
import { render, screen } from "@testing-library/react";
import CourseList from './CourseList';

describe("tests the CourseList component", ()=> {
    it("Check that it renders CourseList component without crashing", ()=> {
        render(<CourseList />)
    })

    it("Check that it renders the 5 different rows", ()=> {
        render(<CourseList />);
        const rowNum = screen.getAllByRole("row");
        expect(rowNum.length).toBe(5);
    })
})
