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
import UserManagPage from "./pages/UserManagPage";
import EmpManagPage from "./pages/EmpManagPage";
import JobPostPage from "./pages/JobPostPage";
import EmpDashbaord from "./pages/EmpDashboard";
import ApplicationPage from "./pages/ApplicationPage";
import JobsPage from "./pages/JobsPage";
import CandidateDetail from "./pages/CandidateDetailPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import CvDownloads from "./pages/CVdownloadPage";

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
          <Route path="/usermanagement" element={<UserManagPage />} />
          <Route path="/empmanagement" element={<EmpManagPage />} />
          <Route path="/postjob" element={<JobPostPage />} />
          <Route path="/empdashboard" element={<EmpDashbaord />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/appdetails" element={<CandidateDetail />} />
          <Route path="/jobdetails" element={<JobDetailsPage />} />
          <Route path="/download" element={<CvDownloads />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
