import React, { useEffect } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import Navigator from "../../components/Navigator/navigator.component"
import Header from "../../components/Header/header.component"
import Sales from "../../sections/Sales/sales-main"
import NewSale from "../../sections/Sales/newSale/newSale"
import {getCurrentUser} from "../../utils/fetching"
import {getUserSuccess} from "../../redux/login/login.actions"
import WalletHistory from "../../sections/wallet/walletHistory"
import PaymentHistory from "../../sections/payment/payment.main"
import "./adminPage.css"

const AdminPage = ({currentSection,getUserSuccess}) => 
{    
    
    useEffect(()=>
    {
        async function getUser()
        {
            let resp = await getCurrentUser()
            if(resp.statusText === "OK")
            {
                getUserSuccess(resp.data)
            }
        }

        getUser()
    
    },[])

    return(
        <div className="admin">
            <div className='leftSide'>
                <Navigator/>
            </div>
            <div className="rightSide">
                <div className='head'>
                    <Header/>   
                </div>
                <Switch>
                    <Route exact path="/" render={()=>currentSection ? <Redirect to = {`${currentSection}`}/> : null } />
                    <Route exact path="/Orders" component={Sales}/>
                    <Route exact path="/Orders/NewOrder" component={NewSale}/>
                    <Route exact path="/WalletHistory" component={WalletHistory}/>
                    <Route exact path="/PaymentHistory" component={PaymentHistory}/>
                </Switch>
            </div>
        </div>
    );   
}

const mapDispatchToProps = dispatch =>
{
    return{
        getUserSuccess:(data)=>dispatch(getUserSuccess(data))
    }
}

const mapStateToProps = state =>
{
    return{
        currentSection:state.section.currentSection
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminPage);

 