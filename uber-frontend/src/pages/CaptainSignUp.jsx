import React from 'react'
import logo from '../assets/LogoDriver.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignUp = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [userdata, setUserdata] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserdata({
       Fullname:{
          Firstname: Firstname,
          lastname: lastname,
        },
        
        email: email,
        password: password,
       
      })
     
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
    };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src={logo} alt="Uber" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base w-full font-medium mb-2">What's your Captain name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="Firstname"
              value={Firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mb-2">
            What's your Captain email address?
          </h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-base"
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2"> Captain - Enter your password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/captainlogin" className=" text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          
         This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignUp
