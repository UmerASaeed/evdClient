import loginType from "./login.types"

export const LoginSuccess = (token) =>
{
    return{
        type:loginType.LOGIN_SUCCESS,
        payload:token
    }
}

export const LoginTimedOut = () =>
{
    return{
        type:loginType.LOGIN_TIMED_OUT
    }
}

export const LogOut = () =>
{
    return{
        type:loginType.LOG_OUT
    }
}

export const getCurrentUser = () =>
{
    return{
        type:loginType.getCurrentUser
    }
}

export const getUserSuccess = (currentUser) =>
{
    return{
        type:loginType.GET_USER_SUCCESS,
        payload:currentUser
    }
}

export const setLogOut = (status) =>
{
    return{
        type:loginType.LOG_OUT_USER,
        payload:status
    }
}