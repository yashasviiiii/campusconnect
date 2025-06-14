import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      padding: "15px 30px", 
      backgroundColor: "#d1c4e9", // Soft lavender
      color: "#333", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ margin: 0 }}>CampusConnect</h2>
      <div>
        <Link to="/" style={{ 
          color: "#333", 
          marginRight: "20px", 
          textDecoration: "none", 
          fontWeight: "bold" 
        }}>
          Home
        </Link>
        <Link to="/login" style={{ 
          color: "#333", 
          textDecoration: "none", 
          fontWeight: "bold" 
        }}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;





