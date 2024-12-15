import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, 
        SET_TYPE_FILTER } from "../actions/notificationActionTypes.js";
import { notificationsNormalizer } from "../schema/notifications.js";
import { Map, fromJS } from "immutable";

export const initialState = new Map({
    entities: new Map({ notifications: new Map() }),
    filter: "DEFAULT",
    result: [],
});

export const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const allNotitifications = action.data.map((notification) => (
                {...notification, isRead: false}
            ));
            const normalizedData = notificationsNormalizer(allNotitifications);
            return state.mergeDeep(normalizedData);
            /*
            return state.merge({
                entities: fromJS(normalizedData.entities),
                result: fromJS(normalizedData.result),
        });
        */
        }
        case MARK_AS_READ: {
            return state.setIn(["entities", "notifications", action.index.toString(), "isRead"], true);

        }
        case SET_TYPE_FILTER: {
            return state.setIn(["filter"], action.filter);
        }
        default:
            return state;
    }
};
