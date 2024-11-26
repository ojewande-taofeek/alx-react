import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Tests the courseActionCreator", () => {
    it(" test for the selectCourse action", () => {
        const expected = { type: SELECT_COURSE, index: 1 };
        expect(selectCourse(1)).toEqual(expected);
    });
    it("tests for the unSelectCourse action", () => {
        const expected = { type: UNSELECT_COURSE, index: 1 };
        expect(unSelectCourse(1)).toEqual(expected);
    });
})
