import {SectionActionTypes} from "./sectionTypes"

export const setCurrentSection = (section) =>
{
    return{
        type:SectionActionTypes.SET_CURRENT_SECTION,
        payload:section
    }
}