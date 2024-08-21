import React, { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useLocalStorageState(null, "userInfo");

  const handleUserInfo = (data) => setUserInfo(data);

  return (
    <UserContext.Provider value={{ userInfo, handleUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of UserProvider");

  return context;
}

export { UserProvider, useUser };
