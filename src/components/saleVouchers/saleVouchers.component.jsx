import React,{useState} from 'react'
import "./saleVouchers.styles.css"

const SaleVouchersComp = ({item}) =>
{
    const [showSaleVouch,setShowSaleVouch] = useState(true)

    return(
        <div className="salesVouchers-vouchers">
            <div className="salesVouchers-orderInfo">
                <div className="sV-V-telcoProd" onClick={()=>setShowSaleVouch(showSaleVouch=>!showSaleVouch)}>{item.telcoName} {item.productName}</div>
                <div className="sV-V-qty">
                    <div className="sv-v-qtyHead">Qty</div>
                    <div>{item.quantity}</div>
                </div>
            </div>
            {
                showSaleVouch ? 
                <div>
                    <div className="sv-vouchersInfo">
                        <div className="sv-v-seqNo">Sequence</div>
                        <div className="sv-v-SN">SN</div>
                        <div className="sv-v-VN">VN</div>
                    </div>
                    <div className="sv-vocuhersList">
                    {
                        item.vouchers.map((voucher,index)=>
                        {
                            return <div className="sv-vouchersVal" key={index}>
                                        <div className="sv-v-seqNoVal">{index+1}</div>
                                        <div className="sv-v-snVal">{voucher.serialNumber}</div>
                                        <div className="sv-v-vnVal">{voucher.voucherPin}</div>
                                    </div>
                        })
                    }
                    </div>
                </div> : null
            }
        </div>
    )
}

export default SaleVouchersComp