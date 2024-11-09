import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe("Test the CourseListRow", ()=> {
    it("Tests when isHeader is true and and textSecondCell does not exist", ()=> {
        render(
            <table>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell='Taofeek' />
                </thead>
        </table>
        );
        expect(screen.getByRole("columnheader", {name: "Taofeek"})).toBeInTheDocument();
    });

    it("Tests when isHeader is true and and textSecondCell exists", ()=> {
        render(
            <table>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell='Taofeek' textSecondCell='Ojewande' />
                </thead>
            </table>
        )
        expect(screen.getByRole("columnheader", {name: "Taofeek"})).toBeInTheDocument();
        expect(screen.getByRole("columnheader", {name: "Ojewande"})).toBeInTheDocument();
    });

    it("Tests when isHeader is false", ()=> {
        render(
            <table>
                <tbody>
                    <CourseListRow  textFirstCell='Taofeek' textSecondCell="Ojewande" />
                </tbody>
        </table>
        );

        expect(screen.getByRole("cell", {name: "Taofeek"})).toBeInTheDocument();
        expect(screen.getByRole("cell", {name: "Ojewande"})).toBeInTheDocument();
    })
})
