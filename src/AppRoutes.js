import { About } from "./pages/About";
import { Home } from "./pages/Home";
import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { GtkButton } from "./pages/Button";
import { Link } from "react-router-dom";
import { GtkLabel } from "./pages/GtkLabel";

export const AppRoutes = [
  { name: "Home", link: "/", component: <Home /> },
  { name: "Gtk Button", link: "/button", component: <GtkButton /> },
  { name: "Gtk Label", link: "/label", component: <GtkLabel /> },
];

export const AppRouteElements = AppRoutes.map(function (item, index) {
  return (
    <React.Fragment key={index.toString()}>
      <Route path={item.link} element={item.component} />
    </React.Fragment>
  );
});

export const NavElements = AppRoutes.map(function (item, index) {
  return (
    <React.Fragment key={index.toString()}>
      <Link to={item.link}> {item.name} </Link>
    </React.Fragment>
  )
});
