import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import api from "../../services/api";
import { Link } from "react-router-dom";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/post"); // your API endpoint
        setJobs(res.data.data);
      } catch (err) {
        console.log("Jobs not found", err);
      }
    };
    fetchJobs();
  }, []);

  if (!jobs.length) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="py-10 bg-[#f1f2f2] dark:bg-brand-gray-900/50 rounded-3xl px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-5 gap-6">
          <div className="text-left">
            <span className="text-brand-primary font-bold text-sm tracking-widest uppercase">
              Opportunities
            </span>
            <h2 className="text-4xl font-bold tracking-tight mt-2">
              Featured Positions
            </h2>
          </div>
          <button className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all">
            View all {jobs.length}+ jobs <FaArrowRightLong />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.slice(0, 3).map((job) => (
            <div
              key={job._id}
              className="glass-card bg-[#FCFDFD] group p-8 rounded-xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <img
                  alt="Company logo"
                  className="w-14 h-14 rounded-xl object-cover bg-white"
                  src={job.companyLogo || "https://via.placeholder.com/56"}
                />
                <span
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                    job.status === "live"
                      ? "bg-brand-secondary/10 text-brand-secondary animate-pulse border-brand-secondary/20"
                      : job.status === "closed"
                        ? "bg-brand-primary/10 text-brand-primary border-brand-secondary/20"
                        : "bg-gray-100 text-gray-600 border-gray-300"
                  }`}
                >
                  {job.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium">
                {job.companyName} • {job.location}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  {job.jobType}
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  {job.salary}
                </span>
              </div>
              <Link to={`/application/${job._id}`}>
                <button className="mt-8 w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-bold opacity-100 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
