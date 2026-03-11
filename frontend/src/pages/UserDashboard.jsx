import React, { useState } from "react";
import UserSidebar from "../components/sidebars/UserSidebar";
import UserHeader from "../components/headers/UserHeader";
import UserDashboardStats from "../components/stats/UserDashboardStats";
import RecentJobs from "../components/usercomp/RecentJobs";
import RecentApplications from "../components/usercomp/RecentApplications";

export default function Dashboard({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <UserSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <UserHeader setIsSidebarOpen={setIsSidebarOpen} />

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Stats */}
          <UserDashboardStats />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Applications Section */}
            <div className="lg:col-span-2">
              <RecentApplications />
            </div>

            {/* Jobs Section */}
            <div>
              <RecentJobs />
            </div>
          </div>
        </div>
      </main>

      {children}
    </div>
  );
}
