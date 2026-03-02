import React from "react";
import UserSidebar from "../components/sidebars/UserSidebar";
import UserHeader from "../components/headers/UserHeader";
import UserDashboardStats from "../components/stats/UserDashboardStats";

import RecentApplications from "../components/usercomp/RecentApplications";
import RecentJobs from "../components/usercomp/RecentJobs";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <UserSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <UserHeader />

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <UserDashboardStats />

          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2">
              <RecentApplications />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
