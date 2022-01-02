import react, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppRouteElements, NavElements } from "./AppRoutes";
import { storeContext } from "./components/AppStoreProvider";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

export function AppRouter() {
  const { store } = useContext(storeContext);
  const { dispatch } = useContext(storeContext);

  function handleLanguageSelection(evt) {
    dispatch({ type: "changeLanguage", payload: evt.target.value });
  }

  return (
    <div className="AppRouter">
      <header className="header">
        <select
          id="select-language"
          onChange={handleLanguageSelection}
          value={store.language}>
          <option value={"rust"}> Rust </option>
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="scheme">Scheme</option>
          <option value="vala">Vala</option>



        </select>
      </header>

      <nav className="navigation">
        {/* <Link to="/"> Home </Link>
        <Link to="/about"> About </Link> */}
        {NavElements}
      </nav>

      <main>
        <Routes>{AppRouteElements}</Routes>
      </main>
    </div>
  );
}
