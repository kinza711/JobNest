import React, { useState } from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import AdminStats from "../components/stats/AdminStats";

import RecentJobs from "../components/usercomp/RecentJobs";
import { FaBriefcase } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import RecentApplications from "../components/usercomp/RecentApplications";

const AdminDashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {children}
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50 dark:bg-background-dark">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <div className="p-8 lg:p-10 max-w-7xl mx-auto w-full space-y-8">
          {/* Stats Cards */}
          <AdminStats
            stats={[
              {
                icon: <FaBriefcase />,
                iconBg: "bg-brand-primary/30 text-brand-primary",
                title: "Total Job Postings",
                value: "2,482",
                percentage: "+12.5%",
                percentageBg: "rgba(16,185,129,0.1)",
              },
              {
                icon: <BsFillBuildingsFill />,
                iconBg: "bg-brand-secondary/30 text-brand-secondary",
                title: "Onsite Jobs",
                value: "1,124",
                percentage: "+8.2%",
                percentageBg: "rgba(16,185,129,0.1)",
              },
              {
                icon: <FaHome />,
                iconBg: "bg-slate-300 text-slate-600",
                title: "Remote Jobs",
                value: "518",
                percentage: "+4.1%",
                percentageBg: "rgba(249,115,22,0.1)",
              },
              {
                icon: <FaUsers />,
                iconBg: "bg-white/40 text-white",
                title: "Total Users",
                value: "$48.5k",
                valueColor: "text-white",
                titleColor: "text-white/80",
                border: "border-brand-primary",
                percentage: "Active",
                percentageBg: "white",
                bgColor: "bg-brand-primary",
              },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Main Jobs */}
            <div className="lg:col-span-2">
              {/* <FeaturedJobs /> */}
              <RecentApplications />
            </div>

            {/* Right Side - Sidebar Jobs */}
            <div className="lg:col-span-1">
              <RecentJobs />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
