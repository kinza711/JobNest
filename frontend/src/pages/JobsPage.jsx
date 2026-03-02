import React from "react";
import JobHero from "../components/publicJob/JobHero";
import FeaturedJobs from "../components/publicJob/FeaturedJobs";
import StatsSection from "../components/publicJob/StatsSection";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import AllJobs from "../components/publicJob/AllJobs";

const HomePage = () => {
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
