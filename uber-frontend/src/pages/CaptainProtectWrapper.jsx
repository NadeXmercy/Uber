import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../Context/CaptainContext'
import axios from 'axios'
import { useEffect } from 'react'

const CaptainProtectWrapper = ({ children }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const { captain } = React.useContext(CaptainDataContext)
    const [isLoading,setIsLoading] = React.useState(true)
    console.log(token);
    useEffect(() => {
        if (!token) {
            navigate("/captainlogin");
        }
    }, [token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: { Authorization: `Bearer ${token}` }   
    }).then(response => {
        if (response.status === 200) {
            setIsLoading(false);
        }
    }).catch(error => {
        console.error("Logout error:", error);
        // localStorage.removeItem("token");
        navigate("/captainlogin");
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectWrapper
