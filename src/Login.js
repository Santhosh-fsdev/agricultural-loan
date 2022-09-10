import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div class="container">
        <div class="form sign-in-container">
          <form action="#">
            <h1>User Sign in</h1>
            <div class="social-container"></div>
            <input
              type="text"
              placeholder="User Email or Phone no"
              id="email"
            />
            <input type="password" placeholder="Password" id="password" />
            <p>Forgot your password?</p>
            <button id="loginButton">
              <p>Sign In</p>{" "}
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Sign UP</h1>
              <p>Sign up here if you don't have account.</p>
              <p
                onClick={() => {
                  navigate("/signup");
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
