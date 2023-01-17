import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../components/Login'

const PrivateRoute = ({children}) => {
  const user=useSelector((store)=>store.auth.isLoggedIn)
 if(!user){
    return <Login/>
 }

  return children

}

export default PrivateRoute