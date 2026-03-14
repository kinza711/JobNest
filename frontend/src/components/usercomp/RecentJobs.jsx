import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

export default function RecentJobs() {
  const [recentJobs, setRecentJobs] = useState([]);
  const [application, setApplication] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleApplication = async () => {
      try {
        const res = await api.get(`/submit/${id}`);
        setApplication(res.data.data);
        //console.log(res);
      } catch (err) {
        console.error("recent jobs not found", err);
      }
    };

    const fetchJobs = async () => {
      try {
        const res = await api.get("/post");
        setRecentJobs(res.data.data);
        //console.log(res);
      } catch (err) {
        console.error("recent jobs not found", err);
      }
    };

    fetchSingleApplication();
    fetchJobs();
  }, [id]);

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
        {recentJobs.slice(0, 3).map((job) => (
          <div
            key={job._id}
            className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-primary/40 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
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
                    {job.jobType}
                  </span>
                  {/* 
                  <span className="text-[10px] text-slate-400">
                    {job.posted}
                  </span> */}
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <button className="bg-brand-primary text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all">
              <Link to={`/application/${job._id}`}>Apply</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
