import * as React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(()=> {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(()=> {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Tests the Header component", ()=> {
    it(" render the Header component to verify it renders without crashing", ()=> {
        render(<Header />);
    });

    it("Verify that the components render img tag", ()=> {
        render(<Header />);
        expect(screen.getByRole('img', {name:"logo"})).toBeInTheDocument();
    })

    it("Verify that the components render h1 tag", ()=> {
        render(<Header />);
        expect(screen.getByRole('heading', {name:"School dashboard"})).toBeInTheDocument();
    })
})
