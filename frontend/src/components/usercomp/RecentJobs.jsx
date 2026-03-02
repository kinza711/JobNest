import React from "react";
import { Link } from "react-router-dom";

export default function RecentJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechVerse",
      location: "Remote",
      type: "Full Time",
      posted: "2 days ago",
      logo: "T",
    },
    {
      id: 2,
      title: "React Developer",
      company: "CodeCraft",
      location: "Karachi, PK",
      type: "Part Time",
      posted: "3 days ago",
      logo: "C",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Designify",
      location: "Remote",
      type: "Contract",
      posted: "5 days ago",
      logo: "D",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Recent Jobs
        </h3>

        <button className="text-xs font-semibold text-brand-primary hover:underline">
          <Link to="/jobs">View All</Link>
        </button>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-primary/40 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                {job.logo}
              </div>

              {/* Info */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {job.title}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {job.company} • {job.location}
                </p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-semibold">
                    {job.type}
                  </span>

                  <span className="text-[10px] text-slate-400">
                    {job.posted}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <button className="bg-brand-primary text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all">
              <Link to="/application">Apply</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
