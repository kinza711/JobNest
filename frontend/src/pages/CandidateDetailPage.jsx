import BreadcrumbHeader from "../components/userapplicationdetails/BreadcrumbHeader";
import JobProfileCard from "../components/userapplicationdetails/JobProfileCard";
import ProfessionalLinks from "../components/userapplicationdetails/ProfessionalLinks";
import ApplicationStats from "../components/userapplicationdetails/ApplicationStats";
import Coverlatter from "../components/userapplicationdetails/Coverlatter";
import ResumeSection from "../components/userapplicationdetails/ResumeSection";
import InternalNotes from "../components/userapplicationdetails/InternalNotes";

import UserHeader from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import UserSidebar from "../components/sidebars/UserSidebar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const CandidateDetail = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const { id } = useParams();
  const [userApp, setUserApp] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await api.get(`/submit/${id}`);
        setUserApp(res.data.data);
      } catch (err) {
        console.error("Application not found:", err);
      }
    };

    const fetchUserProfile = async () => {
      try {
        const res = await api.get(`/profile`);
        setUsers(res.data.user);
      } catch (err) {
        console.error("User profile not found:", err);
      }
    };

    fetchApplication();
    fetchUserProfile();
  }, [id]);

  if (!userApp)
    return (
      <p className="flex justify-center items-center h-screen">Loading...</p>
    );

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Sidebar */}
      {role === "JobSeeker" ? (
        <UserSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : (
        <AdminSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <UserHeader setIsSidebarOpen={setIsSidebarOpen} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <main className="max-w-8xl mx-auto px-8 py-10 space-y-10">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Sidebar is fixed, so we can skip it here for content */}
              {/* Middle Column */}
              <div className="lg:col-span-8 space-y-6">
                {role === "HR" && <BreadcrumbHeader userApp={userApp} />}
                <ApplicationStats userApp={userApp} />
                <Coverlatter userApp={userApp} />
                <ResumeSection userApp={userApp} />
                <InternalNotes userApp={userApp} />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 space-y-6">
                <JobProfileCard userApp={userApp} profile={users} />
                <ProfessionalLinks userApp={userApp} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
