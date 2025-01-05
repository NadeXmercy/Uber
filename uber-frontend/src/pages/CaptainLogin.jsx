import React from 'react'
import logo from "../assets/LogoDriver.png"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
import axios from 'axios'

const CaptainLogin = () => {
  const navigate = useNavigate();
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  const { updateCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async(e) => {
      e.preventDefault();
      const Captain={
        email: email,
        password: password,
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, Captain);
      if (response.status === 200) {
        const data = response.data;
        updateCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
      setEmail("");
      setPassword("");
    };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-3" src={logo} alt="Uber" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">
            What's your email address?
          </h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@gmail.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Join a fleet?
            <Link to="/captainsignup" className=" text-blue-600">
            Register as Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to="/login" className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
