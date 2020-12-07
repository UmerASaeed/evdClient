import React from "react"
import "./salespopUp.styles.css"


const SalesPopUp = ({close,details}) =>
{
    return(
        <div className="salesPopUp">
            <div className='salesPopUp-header'>
                <div className="salesPopUp-headerName">View Transaction</div>
                <div style={{color:"white",fontWeight:"bold",marginRight:"15px",cursor:"pointer"}} onClick={()=>{close()}}>X</div>
            </div>
            <div className="salesPopUp-content">
                <div className="salesPopUp-clientInfo">
                    <div className="salesPopUp-clientName">
                        <div style={{fontFamily:"HelveticaNeueCyr-Bold",marginBottom:"10px"}}>Client</div>
                        <div>{details.fullName}</div>
                    </div>
                    <div className="salesPopUp-reference">
                        <div style={{fontFamily:"HelveticaNeueCyr-Bold",marginBottom:"10px"}}>Transaction #</div>
                        <div style={{display:"flex",justifyContent:"center"}}>{details.orderId}</div> 
                    </div>
                    <div className="salesPopUp-time">
                        <div style={{fontFamily:"HelveticaNeueCyr-Bold",marginBottom:"10px"}}>Time</div>
                        <div>{details.saleTime}</div>
                    </div>
                </div>
                <div className="salesPopUp-clientContent">
                    <div className="salesPopUp-clientHeader-names">
                        <div className="sPopUp-cH-width">Brand</div>
                        <div className="sPopUp-cH-width">Category</div>
                        <div className="sPopUp-cH-width">Product</div>
                        <div className="sPopUp-cH-width">Quantity</div>
                        <div className="sPopUp-cH-width">Price</div>
                        <div className="sPopUp-cH-width">Total Price</div>
                    </div>
                    {
                        details.items.map((item,index)=>
                        {
                            return <div className="salesPopUp-clientDetails" key={index}>
                                        <div className="sPopUp-cH-width">{item.telcoName}</div>
                                        <div className="sPopUp-cH-width">{item.categoryName}</div>
                                        <div className="sPopUp-cH-width">{item.productName}</div>
                                        <div className="sPopUp-cH-width">{item.quantity}</div>
                                        <div className="sPopUp-cH-width">{item.appliedRate}</div>
                                        <div className="sPopUp-cH-width">{item.totalPrice}</div>
                                    </div>  
                        })
                    }
                    <div style={{display:"flex"}}>
                        <div style={{marginLeft:"540px"}}>{"__________"}</div>
                        <div style={{marginLeft:"230px"}}>{"_____________"}</div>
                    </div>
                    <div style={{display:"flex",marginTop:"10px",fontWeight:"bold"}}>
                        <div style={{marginLeft:"580px"}}>{details.totalItems}</div>
                        <div style={{marginLeft:"305px"}}>{details.amount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesPopUp