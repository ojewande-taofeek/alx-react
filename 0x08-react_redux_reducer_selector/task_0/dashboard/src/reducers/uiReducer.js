import { DISPLAY_NOTIFICATION_DRAWER, LOGIN, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS, HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes.js"
import { SELECT_COURSE } from "../actions/courseActionTypes.js";

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export function uiReducer(state = initialState, action) {
    switch(action) {
        case DISPLAY_NOTIFICATION_DRAWER: {
            return { ...state, isNotificationDrawerVisible: true };
        }
        case HIDE_NOTIFICATION_DRAWER: {
            return { ...state, isNotificationDrawerVisible: false };
        }
        case LOGIN_SUCCESS: {
            return { ...state, isUserLoggedIn: true };
        }
        case LOGIN_FAILURE: {
            return { ...state, isUserLoggedIn: false };
        }
        case LOGOUT: {
            return { ...state, isUserLoggedIn: false };
        }
        default: {
            return state;
        }
    }
}
