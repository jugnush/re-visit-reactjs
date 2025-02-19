import React from "react";
import UseContextAnyName from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UseContextAnyName.Provider value={{ user, setUser }}>
      {children}
    </UseContextAnyName.Provider>
  );
};

export default UserContextProvider;
