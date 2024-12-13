import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, 
        SET_TYPE_FILTER } from "../actions/notificationActionTypes.js";

export const initialState = {
    notifications: [],
    filter: "DEFAULT"
};

export const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const allNotitifications = action.data.map((notification) => (
                {...notification, isRead: false}
            ));
            return ({...state, notifications: allNotitifications})
        }
        case MARK_AS_READ: {
           const readNotifications = state.notifications.map((notification) => 
                action.index === notification.id ? 
                {...notification, isRead: true} : notification
            );
            return {...state, notifications: readNotifications};

        }
        case SET_TYPE_FILTER: {
            return {...state, filter: action.filter};
        }
        default:
            return state;
    }
};
