import React, { useState } from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from "../customButton/customButton.component"
import {LoginSuccess} from "../../redux/login/login.actions"
import {Login} from "../../utils/fetching"
import './sign-in.styles.scss'

const Signin = ({LoginSuccess}) =>
{
    const [ userCredentials,setCredentials ] = useState({username:"",password:""})

    const handleSubmit = async ()=>
    {
        const resp = await Login(userCredentials)
        if (resp.status === 200)
        {
            LoginSuccess(resp.data.token)
        }
    }

    const handleChange=(event)=>
    {
        const {value,name}=event.target
        setCredentials({...userCredentials,[name]:value})
    }

    
    return(
        <div className='sign-in'>
            <h2 className="signin-label">Sign In</h2>
            <span className='signin-label'>Sign in with your username and password</span>

            <div className="signin-fields">
                <FormInput name="username" type='text' value={userCredentials.username} label='Username' handleChange={handleChange} required/>
                <FormInput name="password" type='password' value={userCredentials.password} label='Password' handleChange={handleChange} required/>
            </div>         
            <div className='signIn-button' onClick={handleSubmit}>
                <CustomButton btnText="Sign In"/>
            </div>
        </div>
    )
    
}    


const mapDispatchToProps = dispatch =>
{
    return{
        LoginSuccess:(token)=>dispatch(LoginSuccess(token))
    }
}

export default connect(null,mapDispatchToProps)(Signin);