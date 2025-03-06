import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import {Navigate} from "react-router-dom"

interface props {
    children:ReactNode
}
const Authentication:React.FC<props>= ({children}) => {
    const isAuth=useSelector((state:RootState)=>state.auth.isAuthenticated)
 
    if(isAuth){
        return <>{children}</>
    }

    return <Navigate to="/login" />
}

export default Authentication
