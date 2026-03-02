import React from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import UserStats from "../components/stats/UserStats";
import UserTable from "../components/tables/UserTable";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50">
        <Header />
        <div className="p-8 lg:p-10 max-w-7xl mx-auto w-full">
          <UserStats />
          <UserTable />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
