import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/Signin";
import RequestAccess from "./pages/RequestAccess";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy"; 
import TermsOfService from "./pages/TermsOfSerivce"; 
import Contact from "./pages/ContactPage"; 
import About from "./pages/About"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/request-access" element={<RequestAccess />} />
      <Route path="/home" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
