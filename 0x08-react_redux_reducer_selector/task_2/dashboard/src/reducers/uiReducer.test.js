import { initialState, uiReducer } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes"
import { SELECT_COURSE } from "../actions/courseActionTypes";

describe(" test suite for our simple reducer", () => {
    it(`verifies the state returned by the uiReducer function equals
        the initial state when no action is passed`, () => {
        expect(uiReducer(initialState, {}).toJS()).toEqual(initialState.toJS());
    })

    it(`verifies the state returned by the uiReducer
        function equals the initial state when the action 
        SELECT_COURSE is passed`, ()=> {
            expect(uiReducer(initialState, SELECT_COURSE).toJS()).toEqual(initialState.toJS());
    })

    it(`verifies the state returned by the uiReducer function, when the action
        DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the
        isNotificationDrawerVisible property`, () => {
        const expectedAction =  { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} };
        expect(uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER).toJS()).toEqual(expectedAction);
    })
})