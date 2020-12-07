import {all,call} from "redux-saga/effects"
import {SalesSagas} from "./sales/sales.sagas"


export function* rootSaga() 
{
    yield all([call(SalesSagas)])
}