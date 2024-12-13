import { FETCH_COURSE_SUCCESS, SELECT_COURSE , UNSELECT_COURSE} from "../actions/courseActionTypes";
import { initialState, courseReducer } from "./courseReducer";

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

const data = [
                { id: 1, name: 'ES6', credit: 60, isSelected: false },
                { id: 2, name: 'Webpack', credit: 20, isSelected: false },
                { id: 3, name: 'React', credit: 40, isSelected: false }
            ];

describe("Tests for the reducers in the courseReducer.js", () => {
    it("Test that the default state returns an empty array", ()=> {
       expect(courseReducer(undefined, {})).toEqual(initialState);
    });

    it("tests the FETCH_COURSE_SUCCESS action", () => {
        expect(courseReducer(undefined, actionSuccess)).toEqual(data);

    });

    it("tests the SELECT_COURSE", () => {
        const expected = [
                            {
                              id: 1,
                              name: "ES6",
                              isSelected: false,
                              credit: 60
                            },
                            {
                              id: 2,
                              name: "Webpack",
                              isSelected: true,
                              credit: 20
                            },
                            {
                              id: 3,
                              name: "React",
                              isSelected: false,
                              credit: 40
                            }
                    ];
        expect(courseReducer(data, actionSelect)).toEqual(expected);
    });

    it("tests the UNSELECT_COURSE", () => {
        const selected = courseReducer(data, actionSelect);
        expect(courseReducer(selected, actionUnselect)).toEqual(data);
    });

   
})
