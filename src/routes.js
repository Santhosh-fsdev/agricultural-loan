import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import SignUp from "./Signup";

const routes = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);

export default routes;
