import React from "react";
import JobHero from "../components/publicJob/JobHero";
import FeaturedJobs from "../components/publicJob/FeaturedJobs";
import StatsSection from "../components/publicJob/StatsSection";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import AllJobs from "../components/publicJob/AllJobs";
import UserHeader from "../components/headers/UserHeader";
import UserSidebar from "../components/sidebars/UserSidebar";
import AdminSidebar from "../components/sidebars/AdminSidebar";

const HomePage = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  if (token) {
    return (
      <div className="flex h-screen bg-background-light dark:bg-background-dark">
        {/* Sidebar */}
        {role == "JobSeeker" ? <UserSidebar /> : <AdminSidebar />}
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <UserHeader />
          <JobHero />
          <FeaturedJobs />
          <AllJobs />
          <StatsSection />
          <Footer />
        </main>
      </div>
    );
  }

  return (
    <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
      <JobHero />
      <FeaturedJobs />
      <AllJobs />
      <StatsSection />
      <Footer />
    </main>
  );
};

export default HomePage;
