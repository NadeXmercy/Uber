import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclepanel(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => props.setConfirmedRide(true)}
        className="w-full mb-2 border-2 active:border-black rounded-xl p-3 flex justify-between items-center"
      >
        <img
          className="h-12"
          src="data:image/jpeg;base64,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"
          alt=""
        />

        <div className="ml-2 w-1/2 ">
          <h4 className=" font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className=" font-medium text-sm">2 mins away. 15:24</h5>
          <p className=" font-normal text-xs text-gray-600">
            Comfortable Sedans,top-quality drivers
          </p>
        </div>
        <h2 className="font-semibold text-xl">$15</h2>
      </div>
      <div
        onClick={() => props.setConfirmedRide(true)}
        className="w-full mb-2 border-2  active:border-black rounded-xl p-3 flex justify-between items-center"
      >
        <img
          className="h-10  "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />

        <div className="ml-2 w-1/2 ">
          <h4 className=" font-medium text-base">
            <span>
              Moto
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className=" font-medium text-sm">3 mins away. 15:24</h5>
          <p className=" font-normal text-xs text-gray-600">
            Affordable, Motorbike rides
          </p>
        </div>
        <h2 className="font-semibold text-xl">$10</h2>
      </div>
      <div
        onClick={() => props.setConfirmedRide(true)}
        className="w-full mb-2 border-2  active:border-black rounded-xl p-3 flex justify-between items-center"
      >
        <img
          className="h-10  "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />

        <div className="ml-2 w-1/2 ">
          <h4 className=" font-medium text-base">
            <span>
              UberAuto
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className=" font-medium text-sm">3 mins away. 15:24</h5>
          <p className=" font-normal text-xs text-gray-600">
            Affordable, Auto-Ricksaw rides
          </p>
        </div>
        <h2 className="font-semibold text-xl">$12</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
