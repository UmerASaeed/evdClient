import React from 'react'
import {connect} from 'react-redux'
import "./section.styles.css"
import {setCurrentSection} from "../../redux/section/sectionAction"
import {useHistory,withRouter} from 'react-router-dom'

const Section = ({navigateTo,match,addClass,setCurrentSection}) =>
{
    let history=useHistory()

    if(addClass === "Wallet History")
    {
        addClass = "WalletHistory"
    }

    if (addClass === "Payment History")
    {
        addClass = "PaymentHistory"
    }

    return (
        <div>       
            <h3 className={`navTo ${addClass}`} onClick={()=>{

                if(navigateTo === 'Wallet History')
                {
                    setCurrentSection("Wallet History")
                    navigateTo = "WalletHistory"
                }
                else if (navigateTo === 'Payment History')
                {
                    setCurrentSection("Payment History")
                    navigateTo = "PaymentHistory"
                }
                else
                {
                    setCurrentSection(navigateTo) 
                }
                history.push(`${match.path}${navigateTo}`)
                }}>{navigateTo}</h3>
        </div>
    );
}

const mapDispatchToProps = dispatch =>
{
    return{
        setCurrentSection:(section)=>dispatch(setCurrentSection(section))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(Section));