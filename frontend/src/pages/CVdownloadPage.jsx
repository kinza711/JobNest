import React, { useState } from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import CvDownloads from "../components/jobs/CvDownloads";
import CvStats from "../components/stats/CvStats";

const UserManagPage = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {children}
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <div className="p-8 lg:p-10 max-w-7xl mx-auto w-full">
          <CvStats />
          <h1 className="text-4xl font-bold py-4">
            View <span className="text-brand-primary">Applications</span>
          </h1>

          <CvDownloads />
        </div>
      </main>
    </div>
  );
};

export default UserManagPage;
