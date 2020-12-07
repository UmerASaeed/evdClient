import React, { useEffect } from "react"
import SubSection from "../../components/subSection/subSection.component"
import {SalesTitles} from "../../assets/titles"
import SalesListComp from "../../components/salesList/salesList.component"
import {fetchSaleListStart,clearFileLink} from "../../redux/sales/sales.actions"
import Spinner from "../../components/spinner/spinner.component"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import {getCurrentUser} from "../../utils/fetching"
import {getUserSuccess} from "../../redux/login/login.actions"

const Sales = ({fetchSaleListStart,salesList,fileLink,clearFileLink,cancelSaleStatus,getUserSuccess}) =>
{
    const history = useHistory()

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

    useEffect(()=>
    {
        fetchSaleListStart()
    },[])

    useEffect(()=>
    {
        if(fileLink)
        {
            let url = "http://localhost/CustomerApp/api/Order/" + fileLink       
            window.open(url,'Download')
            clearFileLink()
        }

    },[fileLink])

    useEffect(()=>
    {
        if(cancelSaleStatus)
        {
            history.go()
        }

    },[cancelSaleStatus])
    
    return(
        <div className="content">
            <div className="subHeader">
                <h2 className="subText" style={{marginLeft:"30px",color:"#04B1C7",fontFamily:"HelveticaNeueCyr-Medium"}}>Orders</h2>
            </div>
            <SubSection titles={SalesTitles}>
            {
                salesList ? salesList.map((sale,index) =>
                {
                   return <SalesListComp sale={sale} key={index}/>
                }) : <Spinner/>
            }
            </SubSection>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        fetchSaleListStart:()=>dispatch(fetchSaleListStart()),
        clearFileLink:()=>dispatch(clearFileLink()),
        getUserSuccess:(user)=>dispatch(getUserSuccess(user))
    }
}

const mapStateToProps = state =>
{
    return{
        salesList:state.sales.salesList,
        fileLink:state.sales.downloadFileLink,
        cancelSaleStatus:state.sales.cancelSaleStatus
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sales);