import WalletHistory from "../../sections/wallet/walletHistory"
import {walletActionTypes} from "./wallet.types"


export const setWalletHistory = (data) =>
{
    return{
        type:walletActionTypes.SET_WALLET_HISTORY,
        payload:data
    }
}

export const setpaymentHistory = (data) =>
{
    return{
        type:walletActionTypes.SET_PAYMENT_HISTORY,
        payload:data
    }
}