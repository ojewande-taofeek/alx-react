import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

describe("Tests the NotificationItem components", ()=> {
    it("Verify that the basic rendering of the component works without crashing", ()=> {
        render(<NotificationItem />);
    })

    it("Verify that by passing dummy type and value props, it renders the correct html", ()=> {
        render(<NotificationItem type="default" value="test" />);
        expect(screen.getByRole("listitem")).toBeInTheDocument();
    })
    it("Verify that by passing a dummy html prop, it renders the correct html", ()=> {
        render(<NotificationItem html={{__html: "<em>test</em>"}} />);
        expect(screen.getByText("test")).toBeInTheDocument();
    })

    it("check that the component renders NotificationItem elements", () => {
        render(<Notifications  displayDrawer={true} />);
        expect(screen.getByText("New resume available")).toBeInTheDocument();
    })

    it(" verify that the first NotificationItem element renders the right html", ()=> {
        render(<Notifications displayDrawer={true}/>);
        expect(screen.getByText(/Urgent requirement/)).toBeInTheDocument();
    })
})
