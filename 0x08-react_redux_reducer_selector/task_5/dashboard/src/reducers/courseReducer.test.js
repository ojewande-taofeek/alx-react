import { FETCH_COURSE_SUCCESS, SELECT_COURSE , UNSELECT_COURSE} from "../actions/courseActionTypes";
import { initialState, courseReducer } from "./courseReducer";
import { Map } from 'immutable';

const actionSuccess = {
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: "ES6",
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40
    }
  ]
}

const actionSelect = {
  type: SELECT_COURSE,
  index: 2
};

const actionUnselect = {
    type: UNSELECT_COURSE,
    index: 2
};

const data = {
                result: [1, 2, 3],
                entities: {
                  courses: {
                  1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
                  2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
                  3: { id: 3, name: 'React', credit: 40, isSelected: false }
                }},
            };

const stateData = new Map({
    entities: new Map({
                  courses: {
                  1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
                  2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
                  3: { id: 3, name: 'React', credit: 40, isSelected: false }
                }}),
    result: [1, 2, 3],
});

describe("Tests for the reducers in the courseReducer.js", () => {
    it("Test that the default state returns an empty array", ()=> {
       expect((courseReducer(undefined, {})).toJS()).toEqual(initialState.toJS());
    });

    it("tests the FETCH_COURSE_SUCCESS action", () => {
        expect((courseReducer(undefined, actionSuccess)).toJS()).toEqual(data);

    });

    it("tests the SELECT_COURSE", () => {
        const expected = new Map({
    entities: new Map({
                  courses: {
                  1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
                  2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
                  3: { id: 3, name: 'React', credit: 40, isSelected: false }
                }}),
    result: [1, 2, 3],
});
        expect((courseReducer(stateData, actionSelect)).toJS()).toEqual(expected.toJS());
    });

    it("tests the UNSELECT_COURSE", () => {
        const selected = courseReducer(stateData, actionSelect);
        expect((courseReducer(selected, actionUnselect)).toJS()).toEqual(data);
    });

   
})
