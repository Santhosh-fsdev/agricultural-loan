import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="registration-form">
            <h4 class="text-center">Create a New Account</h4>

            <p class="text-success text-center"></p>
              <div class="form-group">
                <label for="username">UserName</label>

                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter User Name"
                  name="username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />

                <p class="err-msg"></p>
              </div>

              <div class="form-group">
                <label for="mobileNumber">mobileNumber</label>

                <input
                  type="text"
                  class="form-control"
                  id="mobileNumber"
                  placeholder="mobileNumber"
                  name="mobileNumber"
                  value={mobile}
                  onChange={(e)=>setMobile(e.target.value)}
                />

                <p class="err-msg"></p>
              </div>

              <div class="form-group">
                <label for="email">Email:</label>

                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />

                <p class="err-msg"></p>
              </div>

              <div class="form-group">
                <label for="password">Password:</label>

                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <p class="err-msg"></p>
              </div>

              <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  class="form-control"
                  placeholder="Enter Confirm password"
                  name="confirmPassword"
                  value={cpassword}
                  onChange={(e)=>setCpassword(e.target.value)}
                />
              </div>

              <button
                type=" submit"
                class="btn btn-danger"
                id="submitButton"
                name="submit"
                onClick={()=>{
                  window.location.href = "/";
                }}
              >
                Register Now
              </button>
          </div>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  );
}
