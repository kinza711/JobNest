import React from "react";
import Header from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import AdminStats from "../components/stats/AdminStats";
import TrafficEngagement from "../components/unique/TrafficEngagement";
import CategoryDistribution from "../components/unique/CategoryDistribution";
import JobTable from "../components/tables/JobTable";

const AdminDashboard = () => {
  // Dummy data for TrafficEngagement
  const trafficData = [
    {
      path: "M0,160 Q80,140 160,170 T320,130 T500,100",
      stroke: "#10B981",
    },
    {
      path: "M0,120 Q100,60 200,100 T400,40 T500,80",
      stroke: "#F97316",
    },
  ];

  // Dummy data for CategoryDistribution
  const categoryData = [
    { name: "Technology", color: "#F97316", percentage: 65, offset: 0 },
    { name: "Management", color: "#10B981", percentage: 25, offset: -65 },
    { name: "Others", color: "#CBD5E1", percentage: 10, offset: -90 },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50 dark:bg-background-dark">
        <Header />
        <div className="p-8 lg:p-10 max-w-7xl mx-auto w-full space-y-8">
          {/* Stats Cards */}
          <AdminStats />
          <div className="charts lg:grid-cols-2 md:grid-cols-2 grid gap-5">
            {/* Traffic & Engagement */}
            <TrafficEngagement
              title="Traffic & Engagement"
              subtitle="Daily user visits and application trends"
              data={trafficData}
            />

            {/* Category Distribution */}
            <CategoryDistribution occupancy="92%" categories={categoryData} />
          </div>

          <JobTable />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
