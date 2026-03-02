import React from "react";
import JobCards from "../publicJob/JobCards";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Senior Product Designer",
      company: "Lumina Systems",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$140k - $190k",
      posted: "Posted 2 hours ago",
      badge: "New",
    },
    {
      title: "Lead Frontend Engineer",
      company: "FinFlow AI",
      location: "New York, NY",
      type: "Full-time",
      salary: "$160k - $210k",
      posted: "Posted 5 hours ago",
      badge: "Featured",
    },
  ];

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
          <JobCards key={index} job={job} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-14 text-center">
        <button className="px-10 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
          Browse All 2,400+ Jobs
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
