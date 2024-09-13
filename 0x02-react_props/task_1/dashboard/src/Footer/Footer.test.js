import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('test Footer component', () => {
    it(`render the Footer component to verify it renders without crashing and 
        Verify that the components at the very least render the text Copyright`, () => {
            const { container } = render(<Footer />);
            expect(container).toBeInTheDocument();

            expect(screen.getByText(/Copyright/i))
        });
});
