import React from "react";
import { FiMapPin, FiBriefcase, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";

const JobCards = ({ job }) => {
  return (
    <div className="group bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl hover:shadow-brand-primary/5 hover:border-brand-primary/30 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold group-hover:text-brand-primary transition-colors">
            {job.title}
          </h4>
          <p className="text-slate-500 font-medium">{job.company}</p>
        </div>

        {job.badge && (
          <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full">
            {job.badge}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
        <div className="flex items-center gap-1.5">
          <FiMapPin />
          {job.location}
        </div>
        <div className="flex items-center gap-1.5">
          <FiBriefcase />
          {job.type}
        </div>
        <div className="flex items-center gap-1.5 font-semibold">
          <FiDollarSign />
          {job.salary}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
        <p className="text-xs text-slate-400">{job.posted}</p>
        <button className="px-5 py-2 bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white font-bold rounded-xl transition-all">
          <Link to="/jobdetails">View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default JobCards;
