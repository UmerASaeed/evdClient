import React, { useState } from 'react'
import {addSelectedProduct,removeSelectedProduct} from "../../redux/sales/sales.actions"
import { connect } from 'react-redux'

const NSProdList = ({prods,addSelectedProduct,removeSelectedProduct}) =>
{
    const [prodQty,setProdQty] = useState(0)
    const [red,setRed] = useState(false)

    const productQuantity = (e,prod) =>
    {
        if (e.target.value > 0)
        {
            setProdQty(e.target.value)
            setRed(true)
            let prodObj = 
            {
                productId:prod.productId,
                productName:prod.productName,
                price:prod.rate,
                qty:e.target.value
            }
            addSelectedProduct(prodObj)
        }
        else
        {
            setProdQty(0)
            setRed(false)
            removeSelectedProduct(prod.productId)
        }
    }

    return(
        <div className={red ? "nsProdsContentSelected" : "nsProdsContent"}>
            <div className="newSale-prodNameVal">{prods.productName}</div>
            <div className="newSale-priceVal">{prods.rate}</div>
            <div className="newSale-qtyVal">
                <input type="number" style={{width:"75px",height:"20px",fontWeight:"bold",textAlign:"center"}} className={ red ? "ns-red-qty" :null } defaultValue={0} onChange={(e)=>productQuantity(e,prods)}/>
            </div>
            <div className="newSale-totalVal">{prods.rate * prodQty}</div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
{
    return{
        addSelectedProduct:(prod)=>dispatch(addSelectedProduct(prod)),
        removeSelectedProduct:(id)=>dispatch(removeSelectedProduct(id))
    }
}
export default connect(null,mapDispatchToProps)(NSProdList)