import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(()=> {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(()=> {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
        expect(screen.getByRole("img", {name: "closeIcon"})).toBeInTheDocument();
    })

    it(" verify that the first NotificationItem element renders the right html", ()=> {
        render(
                <Notifications displayDrawer={true} listNotifications={[{id:3, html: {__html: getLatestNotification()}, type: "default"}]}/>
        )
        expect(screen.getByText(/Urgent requirement/)).toBeInTheDocument();
    })

    it(` that will pass a spy as the markAsRead property
        Check that when simulating a click on the component,
        the spy is called with the right ID argument`, async ()=> {
            const markAsReadMock = jest.fn();
            const user = userEvent.setup();
            render(<NotificationItem markAsRead={markAsReadMock} id={13} value="New Notification" />);
            const notify = screen.getByText("New Notification");
            await user.click(notify);
            expect(markAsReadMock).toHaveBeenCalled();
            expect(markAsReadMock).toHaveBeenCalledWith(13);
        } )
})
