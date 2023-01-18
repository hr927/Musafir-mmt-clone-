import { LOGIN, LOGOUT } from "./auth.types"


const initialstate={
    isLoggedIn:false,
    user:{}
}
// structure of  user:{providerData:[]}
//structure of providerData:
// displayName
// "Faisal Mujtaba"
// email
// "mujtabafaisal944.fk@gmail.com"
// phoneNumber
// null
// photoURL
// "https://lh3.googleusercontent.com/a/AEdFTp5aREz4vl3vZpQ9PtFBzy4K4Hno_1-knd2J-sQf=s96-c"
// providerId
// "google.com"
// uid
// "103478198087354213159"

export const authReducer=(state=initialstate,{type,payload})=>{
       
    switch(type){
        case LOGIN:{
            return {
                isLoggedIn:true,
                user:payload
            }
        }
        case LOGOUT:{
            return initialstate
        }

        default:{
            return state
        }
    }
}