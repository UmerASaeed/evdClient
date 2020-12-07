import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import LoginReducer from "./login/login.reducers"
import SectionReducer from "./section/section-Reducer"
import popUpReducer from "./popUp/popUp-reducer"
import SalesReducer from "./sales/sales.reducer"
import HistoryReducer from "./wallet/wallet.reducer"

const persistConfig =
{
    key:'root',
    storage,
    whitelist:['section','login','sales']
}

const rootReducer = combineReducers({
    section:SectionReducer,
    popUp:popUpReducer,
    login:LoginReducer,
    sales:SalesReducer,
    history:HistoryReducer
});

export default persistReducer(persistConfig,rootReducer);