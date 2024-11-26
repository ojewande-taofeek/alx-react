import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes.js';

export function login(email, password) {
    return {type: LOGIN, user: {email, password}};
}

export function logout() {
    return {type: LOGOUT};
}


export function displayNotificationDrawer() {
    return {type: DISPLAY_NOTIFICATION_DRAWER};
}


export function hideNotificationDrawer() {
    return {type: HIDE_NOTIFICATION_DRAWER};
}

console.log(hideNotificationDrawer());
