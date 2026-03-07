import BreadcrumbHeader from "../components/userapplicationdetails/BreadcrumbHeader";
import JobProfileCard from "../components/userapplicationdetails/JobProfileCard";
import ProfessionalLinks from "../components/userapplicationdetails/ProfessionalLinks";
import ApplicationStats from "../components/userapplicationdetails/ApplicationStats";
import Coverlatter from "../components/userapplicationdetails/Coverlatter";
import ResumeSection from "../components/userapplicationdetails/ResumeSection";
import InternalNotes from "../components/userapplicationdetails/InternalNotes";

import Header from "../components/partials/Header";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

const CandidateDetail = () => {
  const [userApp, setUserApp] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchSingleApplications = async () => {
      try {
        const res = await api.get(`/submit/${id}`);
        setUserApp(res.data.data);
      } catch (err) {
        console.log("application not found", err);
      }
    };

    fetchSingleApplications();
  }, [id]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <BreadcrumbHeader userApp={userApp} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <JobProfileCard userApp={userApp} />
            <ProfessionalLinks userApp={userApp} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-6">
            <ApplicationStats userApp={userApp} />
            <Coverlatter userApp={userApp} />
            <ResumeSection userApp={userApp} />
            <InternalNotes userApp={userApp} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDetail;
