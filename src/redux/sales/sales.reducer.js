import {SalesActionTypes} from "./sales.types"

const INITIAL_STATE = {
    fetchingSalesList:false,
    salesList:null,
    fetchingSalesListError:null,
    fetchingOrderDetails:false,
    OrderDetails:null,
    fetchingOrderDetailsError:null,
    currentOrder:null,
    fetchingSaleVouchers:false,
    saleVouchers:null,
    fetchingSaleVouchersError:null,
    fetchingNSProds:false,
    NewSaleProds:null,
    fetchingNSProdsError:null,
    selectedProducts:null,
    placeOrderStatus:false,
    downloadFileLink:null,
    cancelSaleStatus:false
}

const SalesReducer = (state = INITIAL_STATE,action) =>
{
    switch (action.type) {
        case SalesActionTypes.FETCH_SALES_LIST_START:
            return{
                ...state,
                fetchingSalesList:true
            }
        case SalesActionTypes.FETCH_SALES_LIST_SUCCESS:
            return{
                ...state,
                salesList:action.payload,
                fetchingSalesList:false,
                OrderDetails:null,
                fetchingSalesListError:null,
                placeOrderStatus:false,
                cancelSaleStatus:false
            }            
        case SalesActionTypes.FETCH_SALES_LIST_FAILED:
            return{
                ...state,
                fetchingSalesList:false,
                fetchingSalesListError:action.payload
            }    
        case SalesActionTypes.FETCH_LIST_DETAILS_START:
            return{
                ...state,
                fetchingOrderDetails:true
            }   
        case SalesActionTypes.FETCH_LIST_DETAILS_SUCCESS:
            return{
                ...state,
                OrderDetails:action.payload,
                fetchingOrderDetails:false,
                fetchingOrderDetailsError:null
            }
        case SalesActionTypes.FETCH_LIST_DETAILS_FAILED:
            return{
                ...state,
                fetchingOrderDetails:false,
                fetchingOrderDetailsError:action.payload
            }
        case SalesActionTypes.SET_CURRENT_ORDER:
            return{
                ...state,
                currentOrder:action.payload
            }
        case SalesActionTypes.FETCH_SALE_VOUCHER_START:
            return{
                ...state,
                fetchingSaleVouchers:true
            }
        case SalesActionTypes.FETCH_SALE_VOUCHER_SUCCESS:
            return{
                ...state,
                saleVouchers:action.payload,
                fetchingSaleVouchers:false,
                fetchingSaleVouchersError:null
            }
        case SalesActionTypes.FETCH_SALE_VOUCHER_FAIL:
            return{
                ...state,
                fetchingSaleVouchersError:action.payload,
                fetchingSaleVouchers:false
            }
        case SalesActionTypes.FETCH_NS_PRODS_START:
            return{
                ...state,
                fetchingNSProds:true
            }    
        case SalesActionTypes.FETCH_NS_PRODS_SUCCESS:
            return{
                ...state,
                NewSaleProds:action.payload,
                fetchingNSProds:false,
                fetchingNSProdsError:null
            }
        case SalesActionTypes.FETCH_NS_PRODS_FAIL:
            return{
                ...state,
                fetchingNSProdsError:action.payload,
                fetchingNSProds:false
            }
        case SalesActionTypes.ADD_SELECTED_PRODUCT:
            return{
                ...state,
                selectedProducts:{...state.selectedProducts,[action.payload.productId]:action.payload}
            }
        case SalesActionTypes.REMOVE_SELECTED_PRODUCT:
            return{
                ...state,
                selectedProducts:{...state.selectedProducts,[action.payload]:false}
            }
        case SalesActionTypes.CLEAR_SELECTED_PRODUCT:
            return{
                ...state,
                selectedProducts:null
            }    
        case SalesActionTypes.PLACE_ORDER_STATUS:
            return{
                ...state,
                placeOrderStatus:action.payload
            }
        case SalesActionTypes.DOWNLOAD_FILE_LINK:
            return{
                ...state,
                downloadFileLink:action.payload
            }
        case SalesActionTypes.CLEAR_FILE_LINK:
            return{
                ...state,
                downloadFileLink:null
            }
        case SalesActionTypes.CANCEL_SALE_STATUS:
            return{
                ...state,
                cancelSaleStatus:action.payload
            }
        default:
            return state
    }
}

export default SalesReducer