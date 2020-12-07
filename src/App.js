import React, { useRef } from 'react';
import { connect } from 'react-redux';

import AdminPage from "../src/pages/adminPage/adminPage"
import SignInPage from "./pages/sign-in-page/sign-in"
import {LoginTimedOut} from "./redux/login/login.actions"
import './App.css';

function App({loginSuccess,LoginTimedOut}) {

  const timeout = useRef(null)

  timeout.current = setTimeout(()=>
  {
    LoginTimedOut()
  },14400000)

  if (!loginSuccess)
  {
    clearTimeout(timeout.current)
  }

  return (
    <div className="App">
    {
      loginSuccess ? <AdminPage/> : <SignInPage/>  
    }
    </div>
  );
}

const mapStateToProps = (state) =>
{
  return{
    loginSuccess:state.login.loginSuccess
  }
}


const mapDispatchToProps = (dispatch) =>
{
  return{
      LoginTimedOut:()=>dispatch(LoginTimedOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
