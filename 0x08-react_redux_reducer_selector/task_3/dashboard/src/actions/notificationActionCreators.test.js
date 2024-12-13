import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes.js";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators.js";

describe("Tests the notificationAction functions", () => {
    it("tests the markAsRead function", () => {
        const expected = { type: MARK_AS_READ, index: 1 };
        expect(markAsAread(1)).toEqual(expected);
    });

    it("tests the setNotificationFilter", () => {
        const expected = { type: SET_TYPE_FILTER, filter: 'DEFAULT' };
        expect(setNotificationFilter(NotificationTypeFilters[0])).toEqual(expected);
    });
})
