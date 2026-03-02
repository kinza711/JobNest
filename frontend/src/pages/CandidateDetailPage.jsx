import BreadcrumbHeader from "../components/userapplicationdetails/BreadcrumbHeader";
import JobProfileCard from "../components/userapplicationdetails/JobProfileCard";
import ProfessionalLinks from "../components/userapplicationdetails/ProfessionalLinks";
import ApplicationStats from "../components/userapplicationdetails/ApplicationStats";
import Coverlatter from "../components/userapplicationdetails/Coverlatter";
import ResumeSection from "../components/userapplicationdetails/ResumeSection";
import InternalNotes from "../components/userapplicationdetails/InternalNotes";

import Header from "../components/partials/Header";

const CandidateDetail = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <BreadcrumbHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <JobProfileCard />
            <ProfessionalLinks />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-6">
            <ApplicationStats />
            <Coverlatter />
            <ResumeSection />
            <InternalNotes />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDetail;
