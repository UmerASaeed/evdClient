import popUpActionTypes from "./popUp.types"

const INITIAL_STATE =
{
    details:{},
    closePopUp:false
}

const popUpReducer = ( state = INITIAL_STATE,action) =>
{
    switch (action.type)
    {
        case popUpActionTypes.TOGGLE_POPUP:
        return{
            ...state,
            details:action.payload
        }
        case popUpActionTypes.CLOSE_POPUP:
        return{
            ...state,
            closePopUp:!state.closePopUp
        }
        default:
            return state  
    }
}

export default popUpReducer