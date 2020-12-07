import axios from "axios"
import {store} from "../redux/store"

export const Login = async (credentials) =>
{
    try {
        const options1 =
        {
            headers: {'Content-Type':'application/json' }
        } 
        return await axios.post("http://localhost/CustomerApp/api/Auth/Login",credentials,options1)
    } catch (error) {
        return error
    }
}


const FetchData = async (url,body) =>
{
    try {
        const options1 =
        {
            headers: { 'Authorization': `Bearer ${store.getState().login.token}`,'Content-Type':'application/json' }
        } 
        const resp = await axios.post(url,body,options1)
        return resp
    } catch (error) {
        return error.message
    }
}


export const getSalesList = async () =>
{
    let body = {
        FromDate:"2020-01-01",
        ToDate:"2021-12-31"
    }
    const resp = await FetchData("http://localhost/CustomerApp/api/Order/ViewOrders",body)
    return resp
}

export const getOrderDetails  = async (orderId) =>
{
    const resp = await FetchData("http://localhost/CustomerApp/api/Customer/OrderDetails",orderId)
    return resp
}

export const getNSProds = async () =>
{
    const resp = await FetchData("http://localhost/CustomerApp/api/Product/ProductListForOrder",{})
    return resp
}

export const makeSale = async (sale) =>
{
    const resp = await FetchData("http://localhost/CustomerApp/api/Order/PlaceOrder",sale)
    return resp
}

export const getFileLink = async (id) =>
{
    const resp = await FetchData("http://localhost/CustomerApp/api/Order/GetOrderFileLink",id)
    return resp
}

export const delSale = async (id) =>
{
    const resp = await FetchData("http://localhost/StaffApp/api/Order/CancelOrder",id)
    return resp
}

export const getCurrentUser = async () =>
{
    const resp = await FetchData("http://localhost/CustomerApp/api/Customer/Profile",{})
    return resp
}

export const getWalletHistory = async () =>
{
    const resp = await FetchData("http://localhost/CustomerApp/api/Customer/WalletHistory",{})
    return resp
}

export const getPaymentHistory = async () =>
{
    const resp = await FetchData("http://localhost/CustomerApp/api/Customer/PaymentHistory",{})
    return resp
}
