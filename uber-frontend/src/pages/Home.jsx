import React, { useState } from "react";
import logo from "../assets/Uber_Logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "remixicon/fonts/remixicon.css";
import LocationPanel from "../Components/LocationPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmedRide from "../Components/ConfirmedRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitForDriver from "../Components/WaitForDriver";

const Home = () => {
  const [pick, setPick] = useState("");
  const [Destination, setDestination] = useState("");
  const [openpanel, setOpenpanel] = useState(false);
  const panelRef = useRef(null);
  const vehiclepanelRef = useRef(null);
  const closepanelRef = useRef(null);
  const [vehiclepanel, setVehiclepanel] = useState(false);
  const [confirmedRide, setConfirmedRide] = useState(false);
  const confirmedRidePanelRef = useRef(null);
  const [vehiclefound, setvehiclefound] = useState(false);
  const vehiclefoundRef = useRef(null);
  const waitForDriverRef = useRef(null);
  const [waitForDriver, setWaitForDriver] = useState(false);

  const onsubmithandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (openpanel) {
      gsap.to(panelRef.current, {
        height: "70%",
        duration: 0.5,
        padding: "1.5rem",
        // opacity: 1,
        ease: "power2.out",
      });
      gsap.to(closepanelRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 0.5,
        // opacity: 0,
        ease: "power2.out",
      });
      gsap.to(closepanelRef.current, {
        opacity: 0,
      });
    }
  }, [openpanel]);

  useGSAP(() => {
    if (vehiclepanel) {
      gsap.to(vehiclepanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclepanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclepanel]);

  useGSAP(() => {
    if (confirmedRide) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRide]);

  useGSAP(() => {
    if (vehiclefound) {
      gsap.to(vehiclefoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclefoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclefound]);

  useGSAP(() => {
    if (waitForDriver) {
      gsap.to(waitForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5 " src={logo} alt="" />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] relative bg-white p-6">
          <h5
            ref={closepanelRef}
            onClick={() => setOpenpanel(false)}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              onsubmithandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[34%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setOpenpanel(true)}
              value={pick}
              onChange={(e) => setPick(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5 
          "
              type="text"
              placeholder="Add a Pick-up Location"
            />
            <input
              onClick={() => setOpenpanel(true)}
              value={Destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter Your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 ">
          <LocationPanel
            setOpenpanel={setOpenpanel}
            setVehiclepanel={setVehiclepanel}
          />
        </div>
      </div>
      <div
        ref={vehiclepanelRef}
        className="fixed w-full z-10 translate-y-full  bottom-0 p-3 bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel
          setConfirmedRide={setConfirmedRide}
          setVehiclepanel={setVehiclepanel}
        />
      </div>
      <div
        ref={confirmedRidePanelRef}
        className="fixed w-full z-10 translate-y-full  bottom-0 p-3 bg-white px-3 py-6 pt-12"
      >
        <ConfirmedRide
          setConfirmedRide={setConfirmedRide}
          setvehiclefound={setvehiclefound}
        />
      </div>
      <div
        ref={vehiclefoundRef}
        className="fixed w-full z-10 translate-y-full  bottom-0 p-3 bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setvehiclefound={setvehiclefound} />
      </div>
      <div ref={waitForDriverRef} className="fixed w-full z-10   bottom-0 p-3 bg-white px-3 py-6 pt-12">
        <WaitForDriver setWaitForDriver={setWaitForDriver} />
      </div>
    </div>
  );
};

export default Home;
