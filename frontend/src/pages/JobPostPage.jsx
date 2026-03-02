import React from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import JobPostForm from "../components/jobs/JobPostForm";

const EmpManagement = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50 dark:bg-background-dark">
        <Header />
        <JobPostForm />
      </main>
    </div>
  );
};

export default EmpManagement;








