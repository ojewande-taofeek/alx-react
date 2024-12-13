import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes.js";

export const initialState = [];

export const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COURSE_SUCCESS: {
         const courses = action.data.map((course) => ({...course, isSelected: false}));
         return (courses);
        }
        case SELECT_COURSE: {
            return state.map((course) => (course.id === action.index ?
                {...course, isSelected: true} : 
                course));
        }
        case UNSELECT_COURSE: {
            return state.map((course) => (course.id === action.index ?
                    {...course, isSelected: false} : 
                course));
        }
    default:
        return state
    }
};
