// Login.js
import React from "react";
import "../components/LoginSignup.css";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
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

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
