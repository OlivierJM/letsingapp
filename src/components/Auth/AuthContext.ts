import React from "react";

const user = localStorage.getItem("user");
const loggedIn = localStorage.getItem("loggedIn");


export const AuthContext = React.createContext({
  // @ts-ignore
  user: JSON.parse(user),
  // @ts-ignore
  loggedIn: JSON.parse(loggedIn),
  logout: () => localStorage.clear()
});
