import React from 'react'
import logo from '../assets/LogoDriver.png'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
import axios from 'axios'



const CaptainSignUp = () => {
  const navigate = useNavigate();
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    
const [vehicleColor, setVehicleColor] = useState("");
const [vehiclePlate, setVehiclePlate] = useState("");
const [vehicleCapacity, setVehicleCapacity] = useState("");
const [vehicleType, setVehicleType] = useState("");

  
  const { updateCaptain } = React.useContext(CaptainDataContext);

    const submitHandler =async (e) => {
      e.preventDefault();
      const captainData = {
       fullname:{
          firstname: firstname,
          lastname:   lastname,
        },
        
        email: email,
        password: password,
       vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
       }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      if (response.status === 201) {
        const data = response.data;

        updateCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
     
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
      
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
          <h3 className="text-base font-medium mb-2">Vehicles data</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select vehicle type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Bike</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create Captain Account
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
