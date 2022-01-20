import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const handleUsername = (inp) => {
    setUsername(inp);
  };
  const value = { username, handleUsername };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
