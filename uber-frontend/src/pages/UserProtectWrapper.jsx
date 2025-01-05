import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../Context/UserContext'
import { useContext,useEffect } from 'react'
import { use } from 'react'


const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
   
  useEffect(() => {
    if (!token) {
      navigate("/home");
    }
  }, [token]);
    
  
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
