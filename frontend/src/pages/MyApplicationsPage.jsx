import React, { useState } from "react";
import UserSidebar from "../components/sidebars/UserSidebar";
import UserHeader from "../components/headers/UserHeader";
import UserDashboardStats from "../components/stats/UserDashboardStats";
import MyAppTable from "../components/tables/MyAppTable";

export default function Dashboard({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {children}
      <UserSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <UserHeader setIsSidebarOpen={setIsSidebarOpen} />

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <UserDashboardStats />

          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2">
              {/* <RecentApplications /> */}
              <MyAppTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
