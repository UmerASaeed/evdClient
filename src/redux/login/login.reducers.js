import loginType from "./login.types"

const INITIAL_STATE ={
    loginSuccess:false,
    token:null,
    currentUser:null,
    logOutStatus:false
}

const LoginReducer = (state = INITIAL_STATE,action) =>
{
    switch (action.type) {
        case loginType.LOGIN_SUCCESS:
        return{
            ...state,
            loginSuccess:true,
            token:action.payload,
            logOutStatus:false
        } 
        case loginType.LOGIN_TIMED_OUT:
        case loginType.LOG_OUT:
        return{
            ...state,
            loginSuccess:false,
            token:null
        }    
        case loginType.GET_USER_SUCCESS:
        return{
            ...state,
            currentUser:action.payload   
        }
        case loginType.LOG_OUT_USER:
            return{
                ...state,
                logOutStatus:action.payload
            }
        default:
            return state
        
    }
}

export default LoginReducer