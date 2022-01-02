import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Home">
      <h3> Home page </h3>
      <Link to='/about'> About</Link>
    </div>
  );
}
