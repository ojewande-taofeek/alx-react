import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { initialState, notificationReducer } from "./notificationReducer";

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
}

const markAsReadAction = {
    type: MARK_AS_READ,
    index: 2
};

const setTypeFilter = {
    type: SET_TYPE_FILTER,
    filter: "URGENT"
};

const data = {
             filter: "DEFAULT",
             notifications: [
               {
                 id: 1,
                 isRead: false,
                 type: "default",
                 value: "New course available"
               },
               {
                 id: 2,
                 isRead: false,
                 type: "urgent",
                 value: "New resume available"
               },
               {
                 id: 3,
                 isRead: false,
                 type: "urgent",
                 value: "New data available"
               }
             ]
            };

describe("Tests the notificationReducer", ()=> {
    it("Tests the default state", ()=> {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });
    
    it("Tests the FETCH_NOTIFICATIONS_SUCCESS action", ()=> {
        
        expect(notificationReducer(undefined, notificationSuccessAction)).toEqual(data);
    });

    it("Tests the MARK_AS_READ action", ()=> {
        const expected = {
                  filter: "DEFAULT",
                  notifications: [
                    {
                      id: 1,
                      isRead: false,
                      type: "default",
                      value: "New course available"
                    },
                    {
                      id: 2,
                      isRead: true,
                      type: "urgent",
                      value: "New resume available"
                    },
                    {
                      id: 3,
                      isRead: false,
                      type: "urgent",
                      value: "New data available"
                    }
                  ]
                };

        expect(notificationReducer(data, markAsReadAction)).toEqual(expected);
    });

    it("tests the SET_TYPE_FILTER action", ()=> {
        const expected = {
                      filter: "URGENT",
                      notifications: [
                        {
                          id: 1,
                          isRead: false,
                          type: "default",
                          value: "New course available"
                        },
                        {
                          id: 2,
                          isRead: false,
                          type: "urgent",
                          value: "New resume available"
                        },
                        {
                          id: 3,
                          isRead: false,
                          type: "urgent",
                          value: "New data available"
                        }
                      ]
                    };
        expect(notificationReducer(data, setTypeFilter)).toEqual(expected);
    });

})