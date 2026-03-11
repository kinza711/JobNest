import React, { useState } from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import ApplicationForm from "../components/application/ApplicationForm";
import UserSidebar from "../components/sidebars/UserSidebar";

const EmpManagement = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {children}
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

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50 dark:bg-background-dark">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <ApplicationForm />
      </main>
    </div>
  );
};

export default EmpManagement;
