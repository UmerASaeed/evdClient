import popUpActionTypes from "./popUp.types"

export const TogglePopUp = (details) =>
{
    return{
        type:popUpActionTypes.TOGGLE_POPUP,
        payload:details
    }
}

export const closePopUp = () =>
{
    return{
        type:popUpActionTypes.CLOSE_POPUP
    }
}