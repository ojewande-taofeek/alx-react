import * as React from 'react';
import Notifications from "./Notifications";
import { render, screen, within } from '@testing-library/react';

describe('Tests the components in Notifications.js', ()=> {
    it("tests that Notifications renders without crashing", ()=> {
        render(<Notifications />);
    })

    it("verify that Notifications renders three list items", ()=> {
        render(<Notifications  displayDrawer={true} />);
        const list = screen.getByRole('list');
        const listItem = within(list).getAllByRole('listitem');
        expect(listItem.length).toBe(3);
    })

    it("verify that Notifications renders the text Here is the list of notifications", ()=> {
        render(<Notifications displayDrawer={true} />);
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    })
    
    it("check that the menu item is being displayed when displayDrawer is false", ()=> {
        render(<Notifications />);
        expect(screen.getByText("Your notifications")).toBeInTheDocument();
    })

    it("check that the div.Notifications is not being displayed when displayDrawer is false", ()=> {
        render(<Notifications />)
        expect(screen.queryByText("Here is the list of notifications")).not.toBeInTheDocument();
    })

    it("check that the menu item is being displayed when displayDrawer is true", ()=> {
        render(<Notifications displayDrawer={true} />);
        expect(screen.getByText("Your notifications")).toBeInTheDocument();
    })

    it("check that the div.Notifications is not being displayed when displayDrawer is true", ()=> {
        render(<Notifications displayDrawer={true} />)
        expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
    })
})
