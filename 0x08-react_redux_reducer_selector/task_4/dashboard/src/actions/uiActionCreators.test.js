import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators.js";
import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "./uiActionTypes.js";

describe("Tests the uiActionCreators functions", () => {
    it("tests the login function", () => {
        const expected = {
            type: LOGIN,
            user: { email: 'taofeekojewande@nda.edu.ng', password: 'alx' }
        };
        expect(login('taofeekojewande@nda.edu.ng', 'alx')).toEqual(expected);
    });

    it("tests the logout function", () => {
        const expected = { type: LOGOUT };
        expect(logout()).toEqual(expected);
    });

    it("tests the hideNotificationDrawer function", () => {
        const expected = { type: HIDE_NOTIFICATION_DRAWER };
        expect(hideNotificationDrawer()).toEqual(expected);
    });

    it("tests the displayNotificationDrawer function", () => {
        const expected = { type: DISPLAY_NOTIFICATION_DRAWER };
        expect(displayNotificationDrawer()).toEqual(expected);
    });
})
