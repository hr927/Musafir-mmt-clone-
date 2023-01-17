import { LOGIN, LOGOUT } from "./auth.types"

export const loginAction=(payload)=>async(dispatch)=>{
dispatch({
        type:LOGIN,
        payload:payload
      })
}

export const logoutAction=()=>{
    return {
        type:LOGOUT
    }
}