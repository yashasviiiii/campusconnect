/*import React from "react";

function Login() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Login Page</h2>
      <p>This is where the login form will go.</p>
    </div>
  );
}

export default Login;*/
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => setIsSignup(!isSignup);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <form>
          {isSignup && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p className="toggle-text">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span onClick={toggleMode}>
            {isSignup ? "Login here" : "Sign up here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

