import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import CustomButton from "../../../components/customButton/customButton.component"
import {fetchNSProdsStart,clearSelectedProducts,placeOrder} from "../../../redux/sales/sales.actions"
import NewSaleProd from "../../../components/newSaleProds/newSaleProds.component"
import {getUserSuccess} from "../../../redux/login/login.actions"

import "./newSale.styles.css"
import { Redirect, useHistory } from "react-router-dom"

const NewSale = ({fetchNSProdsStart,NewSaleProds,selectedProducts,clearSelectedProducts,placeOrderAction,placeOrderStatus,currentUser,getUserSuccess}) =>
{
    const [clientInfo,setclientInfo] = useState({clientName:"",balance:null})
    const history = useHistory()
    let spList = [];
    let total = 0;
    let totalQty = 0;

   

    useEffect(()=>
    {   
        fetchNSProdsStart()
        clearSelectedProducts()
    },[])


    if (selectedProducts)
    {
        Object.entries(selectedProducts).map(prod=>
        {
            if(prod[1])
            {
                total = total + (prod[1].price * prod[1].qty)
                totalQty = totalQty + parseInt(prod[1].qty)
                spList.push(prod[1])
            }
        })
    }

    const placeOrder = () =>
    {
        if (spList.length > 0)
        {
            let order = {
                OrderItems:[]
            }
    
            order.OrderItems = spList.map(sp=>
            {
                return{
                    ProductID:sp.productId,
                    Quantity:parseInt(sp.qty)
                }
            })
            placeOrderAction(order.OrderItems)
        }
    }


    const cancelOrder = () =>
    {
        history.goBack()
    }

    return(
        <div className="content">
        {
            placeOrderStatus ? <Redirect to="/Orders"/> :
            <div>
                <div className="newSale-selectClient">
                 
                </div>
                <div className="ns-content">
                    <div className="ns-left-panel">
                    {
                        NewSaleProds ? NewSaleProds.map((prod,index)=>
                        {
                            return <NewSaleProd key={index} prod={prod}/>
                        }) : null
                    }
                    </div>
                    <div>
                        
                    </div>
                    <div className="ns-right-panel">
                    {
                        true ? 
                        <div>
                            <div className="ns-stats-clientName">{}</div>
                            <div className="ns-stats-clientInfo">
                                <div className="ns-clientBalance">
                                    <div>Wallet Balance</div>
                                    <div className="ns-cn-balanceVal">{currentUser.currentCredit}</div>
                                </div>
                                <div className="ns-requestTotal"> 
                                    <div>Request Total</div>
                                    <div className="ns-cn-rtVal">{total}</div>
                                </div>
                            </div>
                            <div className="ns-borderBottom"></div>
                            <div className="ns-sp-headers">
                                <div className="ns-sp-sn">SN</div>
                                <div className="ns-sp-prod">Product</div>
                                <div className="ns-sp-price">Price</div>
                                <div className="ns-sp-qty">Qty</div>
                                <div className="ns-sp-total">Total</div>
                            </div>
                            <div className="ns-sp-list">
                            {
                                spList ? spList.map((prod,index)=>{                            
                                    return <div className="ns-sp-vals" key={index}>
                                                <div className="ns-sp-sn">{index + 1}</div>
                                                <div className="ns-sp-prod">{prod.productName}</div>
                                                <div className="ns-sp-price">{prod.price}</div>
                                                <div className="ns-sp-qty">{prod.qty}</div>
                                                <div className="ns-sp-total">{prod.price * prod.qty}</div>
                                            </div>
                                }) : null
                            }
                            <div className="ns-borderBottom2"></div>
                            <div className="ns-totalVals">
                                <div>{totalQty}</div>
                                <div className="ns-sp-totalVal">{total}</div>
                            </div>
                            </div>
                        </div> :null
                    }   
                    </div>
                    <div className="ns-orderBtns">
                        <div className='ns-cancel-btn' onClick={cancelOrder}>
                            <CustomButton btnText = "cancel" del={true}/> 
                        </div>
                        <div className='ns-placeOrder-btn' onClick={placeOrder}>
                            <CustomButton btnText = "place Order" />
                        </div>
                    </div>
                </div>
                </div> 
        }    
        </div>
    )
}

const mapDispatchToProps = dispatch =>
{
    return{
        fetchNSProdsStart:()=>dispatch(fetchNSProdsStart()),
        clearSelectedProducts:()=>dispatch(clearSelectedProducts()),
        placeOrderAction:(order)=>dispatch(placeOrder(order)),
        getUserSuccess:(user)=>dispatch(getUserSuccess(user))
    }
}

const mapStateToProps = state =>
{
    return{
        NewSaleProds:state.sales.NewSaleProds,
        selectedProducts:state.sales.selectedProducts,
        placeOrderStatus:state.sales.placeOrderStatus,
        currentUser:state.login.currentUser
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewSale)

