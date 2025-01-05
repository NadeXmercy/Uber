import React from "react";
import logo from "../assets/Uber_Logo.png";
import { Link , useNavigate } from "react-router-dom";
import { useState , useContext} from 'react'
import axios from 'axios';
import {UserDataContext} from "../Context/UserContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userdata, setUserdata] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);  
  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
     
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
          <h3 className="text-base font-medium mb-2">What's your name?</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="Firstname"
              value={firstname}
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
            What's your email address?
          </h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-base"
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2">Enter your password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
           Create as account
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className=" text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          
          By Proceeding, you consent to get calls, Whatsapp or SMS messages,
          including from Uber and our affiliates and partners.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
