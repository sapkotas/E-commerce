import React from "react";
import "./CSS/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginsignup">
      <div className="login-container">
        <form className="login-form">
          <h2>Sign up</h2>
          <div className="form-group">
            <input type="text" id="name" placeholder="Name" />

            <input type="text" id="username" placeholder="Email" />
            <input type="password" id="password" placeholder="password" />
            <button type="submit">Continue</button>
          </div>

          <div className="form-agree">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions 
            </label>
          </div>
        </form>
        <p className="login-login">
          Already have an account? <span>Login!</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
