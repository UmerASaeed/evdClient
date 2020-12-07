import React, { useEffect, useState } from 'react'
import SubSection from "../../components/subSection/subSection.component"
import Spinner from "../../components/spinner/spinner.component"
import {walletTitles} from "../../assets/titles"
import {getPaymentHistory} from "../../utils/fetching"
import {setpaymentHistory} from "../../redux/wallet/wallet.actions"
import {setLogOut} from "../../redux/login/login.actions"
import { connect } from 'react-redux'

const PaymentHistory = ({setpaymentHistory,paymentHistory,setLogOut}) =>
{
    useEffect(()=>
    {
        const getWallet = async () =>
        {
            let resp = await getPaymentHistory()
            if(resp.statusText === "OK")
            {
                setpaymentHistory(resp.data)
            }
            else if (resp.status === 401)
            {
                setLogOut(true)
            }
            else
            {
                setpaymentHistory(null)
            }
        }
        getWallet()
    },[])

    return(
        <div className="content">
            <div className="subHeader">
                <h2 className="subText" style={{marginLeft:"30px",color:"#04B1C7",fontFamily:"HelveticaNeueCyr-Medium"}}>Payment History</h2>
            </div>
            <SubSection titles={walletTitles} walletTitles={true}>
            {
                paymentHistory ? paymentHistory.map((data,index)=>
                {
                    return  <div style={{width:"1200px",display:"flex",margin:"40px 0px"}} key={index}>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.orderId}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.trxDate}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.runningTotal}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.amount}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.runningTotal + data.amount}</div>
                            </div>
                })
                : <Spinner/>
            }    
            </SubSection>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
{
    return{
        setpaymentHistory:(data)=>dispatch(setpaymentHistory(data)),
        setLogOut:(status)=>dispatch(setLogOut(status))
    }
}

const mapStateToProps = state =>
{
    return{
        paymentHistory:state.history.paymentHistory
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentHistory)