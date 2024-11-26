import { selectCours, unSelectCours } from "./courseActionTypes.js";

export function selectCourse(index){
    return {...selectCours, index: index};
}

export function unSelectCourse(index){
    return {...unSelectCours, index: index};
}
