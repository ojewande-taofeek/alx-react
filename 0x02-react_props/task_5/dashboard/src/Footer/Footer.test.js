import * as React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe("Test the Footer component", ()=> {
    it("render the Footer component to verify it renders without crashing", ()=> {
        render(<Footer />);
    })

    it("Verify that the components at the very least render the text “Copyright", ()=> {
        render(<Footer />);
        expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    })
})