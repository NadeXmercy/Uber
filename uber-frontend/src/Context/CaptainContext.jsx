import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();


const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [error, setError] = useState(null);   
    const [loading, setLoading] = useState(false);

    const updateCaptain = (captainData) => {
      setCaptain(captainData);
    };

    const value = {
      captain,
      error,
      loading,
      updateCaptain,
    };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;

