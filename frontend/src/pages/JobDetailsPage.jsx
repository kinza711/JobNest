import JobHeader from "../components/jobs/jobdetails/JobHeader";
import Benefits from "../components/jobs/jobdetails/Benefits";
import Footer from "../components/partials/Footer";

import JobDisc from "../components/jobs/jobdetails/JobDisc";
import ApplicationPanel from "../components/jobs/jobdetails/ApplicationPanel";
import CompanySnapshot from "../components/jobs/jobdetails/CompanySnapshot";
import Header from "../components/partials/Header";

const JobPage = () => (
  <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
    <Header />
    <main className="px-4 lg:px-20 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <JobHeader />
          <JobDisc />
          <Benefits />
        </div>
        <div className="lg:col-span-1 space-y-5">
          {/* Sidebar components here */}
          <ApplicationPanel />
          <CompanySnapshot />
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default JobPage;
