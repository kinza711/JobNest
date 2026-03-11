import React, { useState } from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import JobPostForm from "../components/jobs/JobPostForm";

const EmpManagement = ({ children }) => {
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
        <JobPostForm />
      </main>
    </div>
  );
};

export default EmpManagement;
