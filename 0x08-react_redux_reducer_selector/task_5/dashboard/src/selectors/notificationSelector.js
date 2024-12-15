import { Map } from "immutable";

export const filterTypeSelected = (state) => state.get("filter");

export const getNotifications = (state) => state.getIn(["entities", "notifications"]);

export const getUnreadNotifications = (state) => {
    const allNotitifications = getNotifications(state).toJS();
    const unreadList = Object.entries(allNotitifications).filter(([key, value]) => value.isRead === false);
    const unread = Object.fromEntries(unreadList);
    return Map(unread);
}

