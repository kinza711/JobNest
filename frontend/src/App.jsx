import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import F404Page from "./pages/F404Page";
import UnAuthPage from "./pages/UnAuthPage";
import UserDashboard from "./pages/UserDashboard";
import MyApplicationsPage from "./pages/MyApplicationsPage";
import ProfilePage from "./pages/ProfilePage";
import PrivacyPolicyPage from "./pages/PrivacyPage";
import AdminDashboard from "./pages/AdminDashboard";
import JObManag from "./pages/JobManag";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<F404Page />} />
          <Route path="/unauth" element={<UnAuthPage />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/myapplications" element={<MyApplicationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/jobmanagement" element={<JObManag />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
