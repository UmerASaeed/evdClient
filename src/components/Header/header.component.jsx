import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {ReactComponent as Logout} from "../../assets/logout.svg"
import {LogOut} from "../../redux/login/login.actions"
import CustomButton from "../customButton/customButton.component"

import "./header.styles.css"
const Header = ({LogOut,currentUser,logOutStatus}) =>
{
    const history = useHistory()

    const logOut = () =>
    {
        LogOut()
    }

    useEffect(()=>
    {
        if(logOutStatus)
        {
            LogOut()
        }

    },[logOutStatus])

    const newSale = () =>
    {
        history.push("Orders/NewOrder")
    }

    return(
        <div className="header">
            <div className="client-payment-info">
                <div className="paymentDue-client">
                    <div>Payment Due</div> 
                    <div className="client-payment-val">{currentUser ? currentUser.paymentBalance : null}</div>    
                </div>
                <div className="walletHistory-client">
                    <div>Wallet History</div> 
                    <div className="client-payment-val">{currentUser ? currentUser.currentCredit : null}</div>    
                </div>
            </div>
            <div className="client-header">
                <div onClick={newSale}>
                    <CustomButton btnText="New Order" header={true}/>
                </div>
                <div className="signOut" onClick={logOut}>
                        <Logout className="logo" height='40px'/>
                        <p className="logOut">Sign Out</p>
                </div> 
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch =>
{
    return{
        LogOut:()=>dispatch(LogOut())
    }
}

const mapStateToProps = state =>
{
    return{
        currentUser:state.login.currentUser,
        logOutStatus:state.login.logOutStatus
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)