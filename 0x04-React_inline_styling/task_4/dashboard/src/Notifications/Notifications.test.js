import * as React from 'react';
import Notifications from "./Notifications";
import { render, screen, within } from '@testing-library/react';
import { getLatestNotification } from '../utils/utils';
import { userEvent } from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(()=> {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(()=> {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Tests the components in Notifications.js', ()=> {
    it("tests that Notifications renders without crashing", ()=> {
        render(<Notifications />);
    })

    it("verify that Notifications renders three list items", ()=> {
       render(<Notifications displayDrawer={true} listNotifications={[{id:1, type: "default", value: "New course available"},
                            {id:2, type: "top", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]}/>
                ) 
        const list = screen.getByRole('list');
        const listItem = within(list).getAllByRole('listitem');
        expect(listItem.length).toBe(3);
    })

    it("verify that Notifications renders the text Here is the list of notifications", ()=> {
        render(<Notifications displayDrawer={true} listNotifications={[{id:1, type: "default", value: "New course available"},
                            {id:2, type: "top", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]}/>
                )
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
        expect(screen.getByText("No new notification for now")).toBeInTheDocument();
    })

    it("verify that Notifications renders correctly if you pass an empty array", () => {
        render(<Notifications displayDrawer={true} />);
    })

    it("verify that Notifications renders correctly if you pass the listNotifications property", () => {
        render(<Notifications displayDrawer={true} listNotifications={[{id:1, type: "default", value: "New course available"},
                            {id:2, type: "top", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]}/>
                )
    })

    it("verify the component renders it correctly and with the right number of NotificationItem", () => {
        render(<Notifications displayDrawer={true} listNotifications={[{id:1, type: "default", value: "New course available"},
                            {id:2, type: "top", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]}/>
                )
        const listNum = screen.getAllByRole("listitem");
        expect(listNum.length).toBe(3);
    })

    it(`verify that when listNotifications is empty the message Here is the list of notifications
         is not displayed, but No new notification for now is`, () => {
            render(<Notifications displayDrawer={true} />);
            expect(screen.queryByText("Here is the list of notifications")).not.toBeInTheDocument();
            expect(screen.queryByText("No new notification for now")).toBeInTheDocument();
         })

    it(`mockup the console.log function and Check that when calling the function markAsRead
        on an instance of the component, 
        the spy is being called with the right message`, async ()=> {
        const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});

        const user = userEvent.setup()
        render(<Notifications displayDrawer={true} listNotifications={[{id:1, type: "default", value: "New course available"},
                            {id:2, type: "top", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]}/>);
        const firstNotification = screen.getByText("New course available");
        await user.click(firstNotification);
        expect(consoleLogMock).toHaveBeenCalledWith("Notification 1 has been marked as read");
        consoleLogMock.mockRestore();
    })
})
