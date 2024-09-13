import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

import Notifications from './Notifications.js';

describe("test that Notifications renders without crashing", () => {
    it("renders Notifications", () => {
        render(<Notifications />);
    });

    it("verify that Notifications renders three list items", () => {
        const { container } = render(<Notifications />);
        const listItems = container.querySelectorAll('li');
        expect(listItems.length).toBe(3);
    });

    it("verify that Notifications renders the text 'Here is the list of notifications'", () => {
        render(<Notifications />);
        expect(screen.getByText("Here is the list of notifications"));
    });
});