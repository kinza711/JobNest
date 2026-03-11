import React, { useState } from "react";
import JobHero from "../components/publicJob/JobHero";
import FeaturedJobs from "../components/publicJob/FeaturedJobs";
import StatsSection from "../components/publicJob/StatsSection";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import AllJobs from "../components/publicJob/AllJobs";
import UserHeader from "../components/headers/UserHeader";
import UserSidebar from "../components/sidebars/UserSidebar";
import AdminSidebar from "../components/sidebars/AdminSidebar";

const JobPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  if (token) {
    return (
      <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Sidebar */}
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

        {/* Content Area */}
        <div className="flex flex-col flex-1 w-full ">
          {/* Header */}
          <UserHeader setIsSidebarOpen={setIsSidebarOpen} />

          {/* Scrollable Page */}
          <div className="flex-1 overflow-y-auto">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
              <JobHero />

              <FeaturedJobs />

              <AllJobs />

              <StatsSection />

              <Footer />
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <JobHero />

        <FeaturedJobs />

        <AllJobs />

        <StatsSection />

        <Footer />
      </main>
    </div>
  );
};

export default JobPage;
