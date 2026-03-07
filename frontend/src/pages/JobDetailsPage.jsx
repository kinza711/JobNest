import JobHeader from "../components/jobs/jobdetails/JobHeader";
import Benefits from "../components/jobs/jobdetails/Benefits";
import Footer from "../components/partials/Footer";

import JobDisc from "../components/jobs/jobdetails/JobDisc";
import ApplicationPanel from "../components/jobs/jobdetails/ApplicationPanel";
import CompanySnapshot from "../components/jobs/jobdetails/CompanySnapshot";
import Header from "../components/partials/Header";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function JobPage() {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/job/${id}`);
        setJob(res.data.data);
      } catch (err) {
        console.log("job not found", err);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Header />

      <main className="px-4 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <JobHeader job={job} />
            <JobDisc job={job} />
            <Benefits />
          </div>

          <div className="lg:col-span-1 space-y-5">
            <ApplicationPanel job={job} />
            <CompanySnapshot job={job} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// export default JobPage;
