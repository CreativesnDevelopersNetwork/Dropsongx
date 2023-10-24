import React from "react";
import Signup from "../components/SignUp/Signup";
import ContactUs from "./ContactUs/ContactUs";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../components/Login/Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Pricing from "./Pricing/Pricing";

function App() {
  return (
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              {/* Protected routes */}
              <Route path="/" element={<Homepage />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Routes>
          </AuthProvider>
        </Router>
  );
}

export default App;
