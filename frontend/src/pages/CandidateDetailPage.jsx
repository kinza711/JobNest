import BreadcrumbHeader from "../components/userapplicationdetails/BreadcrumbHeader";
import JobProfileCard from "../components/userapplicationdetails/JobProfileCard";
import ProfessionalLinks from "../components/userapplicationdetails/ProfessionalLinks";
import ApplicationStats from "../components/userapplicationdetails/ApplicationStats";
import Coverlatter from "../components/userapplicationdetails/Coverlatter";
import ResumeSection from "../components/userapplicationdetails/ResumeSection";
import InternalNotes from "../components/userapplicationdetails/InternalNotes";

import UserHeader from "../components/headers/UserHeader";
import AdminHeader from "../components/sidebars/AdminSidebar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import UserSidebar from "../components/sidebars/UserSidebar";

const CandidateDetail = () => {
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

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100">
      <UserHeader />

      <main className="max-w-8xl mx-auto px-4 py-10">
        {/* <BreadcrumbHeader userApp={userApp} /> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Admin Sidebar */}
          <aside className="lg:col-span-3">
            {role === "JobSeeker" ? <UserSidebar /> : <AdminHeader />}
          </aside>

          {/* Middle Column: Application Details */}
          <div className="lg:col-span-6 space-y-6">
            {role === "HR" && <BreadcrumbHeader userApp={userApp} />}

            <ApplicationStats userApp={userApp} />
            <Coverlatter userApp={userApp} />
            <ResumeSection userApp={userApp} />
            <InternalNotes userApp={userApp} />
          </div>

          {/* Right Column: Job Profile + Professional Links */}
          <div className="lg:col-span-3 space-y-6">
            <JobProfileCard userApp={userApp} users={users} />
            <ProfessionalLinks userApp={userApp} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDetail;
