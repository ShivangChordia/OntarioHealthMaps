import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/Signin";
import RequestAccess from "./pages/RequestAccess";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/request-access" element={<RequestAccess />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
