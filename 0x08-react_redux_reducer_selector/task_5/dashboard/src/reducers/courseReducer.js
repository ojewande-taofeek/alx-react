import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes.js";
import { Map, fromJS } from 'immutable';
import { coursesNormalizer } from "../schema/courses.js";

export const initialState = new Map(
    {
        entities: Map(),
        result: [],
    });

export const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COURSE_SUCCESS: {
            const courses = action.data.map((course) => ({...course, isSelected: false}));
            const normalizedData = coursesNormalizer(courses);
            return state.merge({
                entities: fromJS(normalizedData.entities),
                result: fromJS(normalizedData.result),
            });
        }
        case SELECT_COURSE: {
            return state.setIn(['entities', 'courses', action.index, 'isSelected'], true)

        }
        case UNSELECT_COURSE: {
            return state.setIn(['entities', 'courses', action.index, 'isSelected'], false)
        }
    default:
        return state
    }
};
