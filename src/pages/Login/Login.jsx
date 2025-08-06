import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  const toggleState = () => {
    setCurrState(currState === "Sign Up" ? "Login" : "Sign Up");
  };

  return (
    <div className="login">
      <img src="/logo.jpeg" className="logo" alt="Logo" />
      <form className="login-form">
        <h2>{currState}</h2>

        {currState === "Sign Up" && (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />

        <button type="submit">{currState === "Sign up"?"Create account":"Login Now"}</button>

        {currState === "Sign Up" && (
          <div className="login-term">
            <input type="checkbox" className="text" required />
            <p> Agree to the terms of use & privacy policy.</p>
          </div>
        )}

        <div className="login-forgot">
          {
            currState === "Sign up"
            ? <p className="login-toggle">
            Already have an account
            <span onClick={()=>setCurrState("Login")}>Login here</span>
          </p>
          :
          <p className="login-toggle">
            Create an account
            <span onClick={()=>setCurrState("Sign up")}>Click here</span>;;;;;
          </p>
          }
        </div>
      </form>
    </div>
  );
};

export default Login;
