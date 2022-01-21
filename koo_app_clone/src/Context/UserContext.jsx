import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const handleName = (nm) => {
    setName(nm);
  };
  const handleUsername = (usrnm) => {
    setUsername(usrnm);
  };
  const value = { name, username, handleUsername };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
