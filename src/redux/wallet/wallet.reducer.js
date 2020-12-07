import {walletActionTypes} from "./wallet.types"
const INITIAL_STATE = {
    walletHistory:null,
    paymentHistory:null
}

const HistoryReducer = (state = INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case walletActionTypes.SET_WALLET_HISTORY:
            return{
                ...state,
                walletHistory:action.payload
            }
        case walletActionTypes.SET_PAYMENT_HISTORY:
            return{
                ...state,
                paymentHistory:action.payload
            }
        default:
            return state
    }
}

export default HistoryReducer;