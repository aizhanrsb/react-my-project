import React from "react";
import axios from "axios";

export const authContext = React.createContext();
const API = "";

const AuthContextProvider = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
