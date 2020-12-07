import React, { useEffect, useState } from 'react'
import SubSection from "../../components/subSection/subSection.component"
import Spinner from "../../components/spinner/spinner.component"
import {walletTitles} from "../../assets/titles"
import {getWalletHistory} from "../../utils/fetching"
import {setWalletHistory} from "../../redux/wallet/wallet.actions"
import {setLogOut} from "../../redux/login/login.actions"
import { connect } from 'react-redux'

const WalletHistory = ({setWalletHistory,walletHistory,setLogOut}) =>
{
    useEffect(()=>
    {
        const getWallet = async () =>
        {
            let resp = await getWalletHistory()
            if(resp.statusText === "OK")
            {
                setWalletHistory(resp.data)
            }
            else if(resp.status === 401)
            {
                setLogOut(true)
            }
            else
            {
                setWalletHistory(null)
            }
        }
        getWallet()
    },[])

    return(
        <div className="content">
            <div className="subHeader">
                <h2 className="subText" style={{marginLeft:"30px",color:"#04B1C7",fontFamily:"HelveticaNeueCyr-Medium"}}>Wallet History</h2>
            </div>
            <SubSection titles={walletTitles} walletTitles={true}>
            {
                walletHistory ? walletHistory.map((data,index)=>
                {
                    return  <div style={{width:"1200px",display:"flex",margin:"40px 0px"}} key={index}>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.orderId}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.trxDate}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.runningTotal}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.trxValue}</div>
                                <div style={{width:"20%",display:"flex",justifyContent:"center"}}>{data.runningTotal + data.trxValue}</div>
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
        setWalletHistory:(data)=>dispatch(setWalletHistory(data)),
        setLogOut:(status)=>dispatch(setLogOut(status))
    }
}

const mapStateToProps = state =>
{
    return{
        walletHistory:state.history.walletHistory
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WalletHistory)