import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <h2 style={{ display: "inline", marginRight: "20px" }}>CampusConnect</h2>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Home</Link>
      <Link to="/login" style={{ color: "#fff" }}>Login</Link>
    </nav>
  );
}

export default Navbar;



