// FeaturedJobs.jsx
import React, { useState, useEffect } from "react";
import JobCards from "../publicJob/JobCards";
import api from "../../services/api";

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
    <section className="py-16 bg-brand-gray-50 rounded-3xl dark:bg-brand-gray-900">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-bold text-brand-gray-900 dark:text-white">
          Featured <span className="text-brand-primary">Opportunities</span>
        </h3>
        <p className="text-brand-gray-500 mt-2">
          Hand-picked roles from top startups and enterprise teams
        </p>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10">
        {jobs.map((job, index) => (
          <JobCards key={job._id || index} job={job} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
