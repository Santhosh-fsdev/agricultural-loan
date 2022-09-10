import React from "react";

export default function Signup() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="registration-form">
            <h4 class="text-center">Create a New Account</h4>

            <p class="text-success text-center"></p>
            <form action="" method="post">
              <div class="form-group">
                <label for="username">UserName</label>

                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter User Name"
                  name="username"
                  value=""
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
                  value=""
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
                  value=""
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
                />
              </div>

              <button
                type=" submit"
                class="btn btn-danger"
                id="submitButton"
                name="submit"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  );
}
