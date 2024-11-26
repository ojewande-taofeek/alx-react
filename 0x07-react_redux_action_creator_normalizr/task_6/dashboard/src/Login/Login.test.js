import * as React from 'react';
import Login from './Login';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(()=> {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(()=> {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test the Login componenent", ()=> {
    it("render the Login component to verify it renders without crashing", ()=> {
        render(<Login />);
    })

    it("Verify that the component renders 2 Label tags", ()=> {
        render(<Login />);
        expect(screen.getByLabelText("Email:")).toBeInTheDocument();
        expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    })
})
