import React,{useEffect, useState} from "react"
import CustomButton from "../customButton/customButton.component"
import SalesPopUp from "../salesPopUp/salesPopUp.component"
import {fetchListDetailsStart,setCurrentOrder,getDownloadFileLink,cancelSale} from "../../redux/sales/sales.actions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import "./salesList.styles.css"

const SalesListComp = ({sale,fetchListDetailsStart,OrderDetails,match,setCurrentOrder,getDownloadFileLink,cancelSale}) =>
{
    const [SalesPopUpVal,setSalesPopUpVal] = useState(false)
    

    // useEffect(()=>
    // {
    //     if (OrderDetails)
    //     {
    //         //setSalesPopUpVal(true)
    //         console.log(OrderDetails)
    //     }
    // },[OrderDetails])

    const closePopUp = () =>
    {
        setSalesPopUpVal(false)
    }

    const openPopUp = async () =>
    {
        fetchListDetailsStart(sale.orderId)
        setSalesPopUpVal(true)
    }

    const downloadFile = () =>
    {
        let order = {
            OrderId:sale.orderId
        }
        getDownloadFileLink(order)
    } 
    

    return(
        <div className="sales-ListOrders">
            <div className="sales-time sales-width">{sale.saleTime}</div>
            <div className="sales-refrenceNo sales-width" onClick={openPopUp}>{sale.orderId}</div>
            <div className="salesPopUpVal">
               { SalesPopUpVal ? OrderDetails ? <SalesPopUp close={closePopUp} details={OrderDetails} /> : null : null}
            </div>
            <div className="sales-fileDownload sales-width" onClick={downloadFile}>
                <CustomButton btnText="download" downloaded={sale.downloaded}/>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        fetchListDetailsStart:(orderId)=>dispatch(fetchListDetailsStart(orderId)),
        setCurrentOrder:(orderId)=>dispatch(setCurrentOrder(orderId)),
        getDownloadFileLink:(orderId)=>dispatch(getDownloadFileLink(orderId)),
        cancelSale:(orderId)=>dispatch(cancelSale(orderId))
    }
}

const mapStateToProps = state =>
{
    return{
        OrderDetails:state.sales.OrderDetails
    }
}
 
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SalesListComp))