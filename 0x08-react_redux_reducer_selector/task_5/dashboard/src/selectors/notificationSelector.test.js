import { notificationReducer } from "../reducers/notificationReducer.js";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from "../actions/notificationActionTypes.js";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector.js";

const notificationSuccessAction = {
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: [
    {
      id: 1,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available"
    }
  ]
};

const markAsReadAction = {
    type: MARK_AS_READ,
    index: 2
};


const stateUn = notificationReducer(undefined, {});
const stateSU = notificationReducer(undefined, notificationSuccessAction);
const stateRead = notificationReducer(stateSU, markAsReadAction);

describe("Tests the selectors for the notificationReducer", ()=> {
    it("Tests for the filter type", () => {
        expect(filterTypeSelected(stateUn)).toEqual("DEFAULT");    
    });

    const expected = {
                 1: {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                  },
                2: {
                    id: 2,
                    isRead: false,
                    type: "urgent",
                    value: "New resume available"
                  },
                3: {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                  }
                };
    it("should all notifications", () => {
        expect(getNotifications(stateSU).toJS()).toEqual(expected);
    });

    it("should return all unread notifications", ()=> {
        const dataRead = {
                 1: {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                  },
                
                3: {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                  }
                };
        expect(getUnreadNotifications(stateRead).toJS()).toEqual(dataRead);
    });
})
