import React, { useState } from 'react'
import NSProdList from "../newSaleProdList/newSaleProdList.component"
import sideBtn from "./sideBtn.png"
import dwnBtn from "../../assets/dwnBtn.png"
import "./newSaleProds.styles.css"

const NewSaleProd = ({prod}) =>
{
    const [hide,setHide] = useState(true)

    return(
        <div className="newSaleProd">
            <div className="newSaleProd-Info">
                <div className="nsProd-name" onClick={()=>setHide(hide=>!hide)} style={{display:"flex"}}>
                {!hide ? <img src={sideBtn} alt="" height="20px"/> : <img src={dwnBtn} alt="" height="20px"/>}
                
                <div style={{marginLeft:"10px"}}>
                    {prod.telcoName}
                </div>
                </div>
                <img className="nsProd-logo" src={"http://localhost/StaffApp/logos/" + `${prod.logoName}`}/>
            </div>
            {   hide ? 
                prod.categories.map((category,index)=>
                {
                    return <div className="newSale-Prod-Info" key={index}>
                                <div className="newSaleProd-Category">{category.categoryName}</div>
                                <div className="nsProdsList">
                                    <div className="nsProdsHeader">
                                        <div className="newSale-prodName">Product</div>
                                        <div className="newSale-price">Price</div>
                                        <div className="newSale-qty">Qty</div>
                                        <div className="newSale-total">Total</div>
                                    </div>
                                    <div style={{height:"auto",maxHeight:"200px",overflow:"scroll"}}>
                                    {
                                        category.products.map((prods,index)=>
                                        {
                                            return <NSProdList prods={prods} key={index}/>
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                }) : null
            }
        </div>
    )
}

export default NewSaleProd