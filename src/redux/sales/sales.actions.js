import {SalesActionTypes} from "./sales.types"

export const fetchSaleListStart = () =>
{
    return{
        type:SalesActionTypes.FETCH_SALES_LIST_START
    }
}

export const fetchSaleListSuccess = (salesList) =>
{
    return{
        type:SalesActionTypes.FETCH_SALES_LIST_SUCCESS,
        payload:salesList
    }
}

export const fetchSaleListError = (error) =>
{
    return{
        type:SalesActionTypes.FETCH_SALES_LIST_FAILED,
        payload:error
    }
}

export const fetchListDetailsStart = (orderId) =>
{
    return{
        type:SalesActionTypes.FETCH_LIST_DETAILS_START,
        payload:orderId
    }
}

export const fetchListDetailsSuccess = (ListDetail) =>
{
    return{
        type:SalesActionTypes.FETCH_LIST_DETAILS_SUCCESS,
        payload:ListDetail
    }
}

export const fetchListDetailError = (error) =>
{
    return{
        type:SalesActionTypes.FETCH_LIST_DETAILS_FAILED,
        payload:error
    }
}

export const setCurrentOrder = (orderId) =>
{
    return{
        type:SalesActionTypes.SET_CURRENT_ORDER,
        payload:orderId
    }
}

export const fetchSaleVoucherStart = (orderId) =>
{
    return{
        type:SalesActionTypes.FETCH_SALE_VOUCHER_START,
        payload:orderId
    }
}

export const fetchSaleVoucherSuccess = (salesVoucher) =>
{
    return{
        type:SalesActionTypes.FETCH_SALE_VOUCHER_SUCCESS,
        payload:salesVoucher
    }
}

export const fetchSaleVoucherFail = (error) =>
{
    return{
        type:SalesActionTypes.FETCH_SALE_VOUCHER_FAIL,
        payload:error
    }
} 

export const fetchNSProdsStart = () =>
{
    return{
        type:SalesActionTypes.FETCH_NS_PRODS_START
    }
}

export const fetchNSProdsSuccess = (NSprods) =>
{
    return{
        type:SalesActionTypes.FETCH_NS_PRODS_SUCCESS,
        payload:NSprods
    }
}

export const fetchNSProdsFail = (error) =>
{
    return{
        type:SalesActionTypes.fetchNSProdsFail,
        payload:error
    }
}


export const addSelectedProduct = (prod) =>
{
    return{
        type:SalesActionTypes.ADD_SELECTED_PRODUCT,
        payload:prod
    }
}

export const removeSelectedProduct = (prod) =>
{
    return{
        type:SalesActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:prod
    }
}

export const clearSelectedProducts = () =>
{
    return{
        type:SalesActionTypes.CLEAR_SELECTED_PRODUCT
    }
}

export const placeOrder = (order) =>
{
    return{
        type:SalesActionTypes.PLACE_ORDER,
        payload:order
    }
}

export const placeOrderStatus = (status) =>
{
    return{
        type:SalesActionTypes.PLACE_ORDER_STATUS,
        payload:status
    }
}

export const getDownloadFileLink = (orderId) =>
{
    return{
        type:SalesActionTypes.DOWNLOAD_FILE,
        payload:orderId
    }
} 

export const fileLink = (link) =>
{
    return{
        type:SalesActionTypes.DOWNLOAD_FILE_LINK,
        payload:link
    }
}

export const clearFileLink = () =>
{
    return{
        type:SalesActionTypes.CLEAR_FILE_LINK
    }
}

export const cancelSale = (data) =>
{
    return{
        type:SalesActionTypes.CANCEL_SALE,
        payload:data
    }
}

export const cancelSaleStatus = (status) =>
{
    return{
        type:SalesActionTypes.CANCEL_SALE_STATUS,
        payload:status
    }
}