import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes.js';

export function login(email, password) {
    return {type: LOGIN, user: {email, password}};
}

export const boundLogin = (email, password) => dispatch(login(email, password));

export function logout() {
    return {type: LOGOUT};
}

export const boundLogout = () => dispatch(logout());

export function displayNotificationDrawer() {
    return {type: DISPLAY_NOTIFICATION_DRAWER};
}

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
    return {type: HIDE_NOTIFICATION_DRAWER};
}

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());
