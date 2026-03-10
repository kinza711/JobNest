import React from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import ApplicationForm from "../components/application/ApplicationForm";
import UserSidebar from "../components/sidebars/UserSidebar";

const EmpManagement = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {role === "JobSeeker" ? <UserSidebar /> : <AdminSidebar />}

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50 dark:bg-background-dark">
        <Header />
        <ApplicationForm />
      </main>
    </div>
  );
};

export default EmpManagement;
