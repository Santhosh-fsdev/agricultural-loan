import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div class="container">
        <div class="form sign-in-container">
            <h1>User Sign in</h1>
            <div class="social-container"></div>
            <input
              type="text"
              placeholder="User Email or Phone no"
              id="email"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <input type="password" placeholder="Password" id="password" value={password}
                  onChange={(e)=>setPassword(e.target.value)} />
            <p>Forgot your password?</p>
            <button id="loginButton" onClick={() => {
                 window.location.href = "/home";
                }}>
              <p>Sign In</p>{" "}
            </button>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Sign UP</h1>
              <p>Sign up here if you don't have account.</p>
              <p
                onClick={() => {
                  window.location.href = "/signup";
                }}
                id="signupLink"
              >
                <button class="signup_btn">Sign Up</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
