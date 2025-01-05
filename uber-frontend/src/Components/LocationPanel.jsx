import React from "react";

const LocationPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's School, Noida",
    "12A, Sector 15, Noida",
    "56C, Main Market, Noida",
    "78D, Green Park, Noida",
    "98E, Sector 18, Noida",
    "34A, Greater Noida",
  ];

  return (
    <div>
      {locations.map((location, index) => {
       return <div
         onClick={() => {
           props.setVehiclepanel(true)
           props.setOpenpanel(false)
        } 
           
                         

          }
          key={index}
          className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl my-2 items-center justify-start"
        >
          <h2 className="bg-[#eee] h-8 w-9 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      })}
    </div>
  );
};

export default LocationPanel;
