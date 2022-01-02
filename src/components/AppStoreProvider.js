import React, { useReducer, useContext, createContext } from "react";

export const storeContext = createContext();

const initialState = { language: localStorage.getItem("language"), count:0 };
const reducer = (CurrentState, action) => {
  switch (action.type) {

    case "changeLanguage":
      localStorage.setItem('language', action.payload);
      return{...CurrentState, language: action.payload}
    case "increment":
      return { ...CurrentState, count: CurrentState.count + 1 };
    case "decrement":
      return { ...CurrentState, count: CurrentState.count - 1 };
    case "setuser":
      return { ...CurrentState, userDetails: action.payload };
    case "setIsLoggedIn":
      return { ...CurrentState, isLoggedIn: (CurrentState.isLoggedIn? false : true)}
    default:
      throw new Error("Unexpected action");
  }
};

export  function AppStoreProvider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {props.children}
    </storeContext.Provider>
  );
}