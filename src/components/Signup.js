// Signup.js
import React from "react";
import "../components/LoginSignup.css";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <div className="input-group">
          <AiOutlineUser className="input-icon" />
          <input type="email" placeholder=" " required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <AiOutlineLock className="input-icon" />
          <input type="password" placeholder=" " required />
          <label>Password</label>
        </div>

        <div className="input-group">
          <AiOutlineLock className="input-icon" />
          <input type="password" placeholder=" " required />
          <label>Confirm Password</label>
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Signup;
