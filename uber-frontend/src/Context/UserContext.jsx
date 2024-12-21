import React, { createContext } from "react";
import { useState } from "react";



export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [userdata, setUserdata] = useState({
      email: "",
        firstname: "",
        lastname: "",
    });

  return (
    <div>
      <UserDataContext.Provider value={{ userdata, setUserdata }}>{children}</UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
