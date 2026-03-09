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
import EditUserPage from "./pages/EditUserPage";
import ProtectedRoute from "./utils/protected";

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
          <Route
            path="/userdashboard"
            element={
              <ProtectedRoute allowedRoles={["JobSeeker"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myapplications"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR", "JobSeeker"]}>
                <MyApplicationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR", "JobSeeker"]}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/jobmanagement"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR"]}>
                <JObManag />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usermanagement"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR"]}>
                <UserManagPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/empmanagement"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <EmpManagPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/postjob"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR"]}>
                <JobPostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/postjob/:id"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR"]}>
                <JobPostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/empdashboard"
            element={
              <ProtectedRoute allowedRoles={["HR"]}>
                <EmpDashbaord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/application/:id"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR", "JobSeeker"]}>
                <ApplicationPage />
              </ProtectedRoute>
            }
          />
          <Route path="/jobs" element={<JobsPage />} />
          {/* no link implemented yet for appdetails */}
          <Route
            path="/appdetails/:id"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR", "JobSeeker"]}>
                <CandidateDetail />
              </ProtectedRoute>
            }
          />
          <Route path="/jobdetails/:id" element={<JobDetailsPage />} />
          <Route
            path="/download"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR"]}>
                <CvDownloads />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edituser/:id"
            element={
              <ProtectedRoute allowedRoles={["Admin", "HR"]}>
                <EditUserPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
