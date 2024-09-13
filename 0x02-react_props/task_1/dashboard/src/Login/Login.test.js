import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';


describe("test Login componenet", () => {
    it("render the Login component to verify it renders without crashing and contains 2 input and 2 label", () => {
        const { container } = render(<Login />);
        expect(container).toBeInTheDocument();

        const inputSelector = container.querySelectorAll("input");
        expect(inputSelector.length).toBe(2);

        const labelSelector = container.querySelectorAll('label');
        expect(labelSelector.length).toBe(2);
    });
});
