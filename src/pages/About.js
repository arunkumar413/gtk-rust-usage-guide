import React from "react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="Home">
      <h3> About page </h3>
      <Link to="/home"> Home</Link>
    </div>
  );
}
