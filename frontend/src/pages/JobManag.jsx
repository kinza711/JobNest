import React, { useState } from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";

import JobStats from "../components/stats/JobStats";
import JobTable from "../components/tables/JobTable";

const AdminDashboard = ({ children }) => {
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
        <div className="p-8 lg:p-10 max-w-7xl space-y-8 mx-auto w-full">
          <JobStats />
          <JobTable />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
