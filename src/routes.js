import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Loan from "./Loan";
import LoanStatus from "./LoanStatus";
import LoanTrack from "./LoanTrack";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./Signup";

const routes = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/loan" element={<Loan />} />
      <Route path="/loanstatus" element={<LoanStatus />} />
      <Route path="/loantrack" element={<LoanTrack />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default routes;
