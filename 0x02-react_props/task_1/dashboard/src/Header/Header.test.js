import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

describe("test the Header component", () => {
    it("render the Header component to verify it renders without crashing with hi and img tags present", () => {

        const { container } = render(<Header />);
        expect(container).toBeInTheDocument()
        
        const imgSelector = container.querySelector("img");
        expect(imgSelector).toBeInTheDocument();

        const headingSelector = container.querySelector('h1');
        expect(headingSelector).toBeInTheDocument();
    });
});
