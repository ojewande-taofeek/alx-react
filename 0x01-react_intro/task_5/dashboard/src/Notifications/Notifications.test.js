import * as React from 'react';
import Notifications from "../Notifications";
import { render, screen, within } from '@testing-library/react';

describe('Tests the components in Notifications.js', ()=> {
    it("tests that Notifications renders without crashing", ()=> {
        render(<Notifications />);
    })

    it("verify that Notifications renders three list items", ()=> {
        render(<Notifications />);
        const list = screen.getByRole('list');
        const listItem = within(list).getAllByRole('listitem');
        expect(listItem.length).toBe(3);
    })

    it("verify that Notifications renders the text Here is the list of notifications", ()=> {
        render(<Notifications />);
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    })
})
