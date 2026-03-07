import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye, MdDelete, MdEdit } from "react-icons/md";
import api from "../../services/api";
import { Link } from "react-router-dom";
export default function JobTable() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await api.get("/post");

        setJobs(res.data.data);
        // console.log("Applications fetched successfully");
      } catch (err) {
        console.log("Applications not found", err);
      }
    };
    fetchApplication();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/post/${id}`);
      alert(res.data.message);

      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.log(err);
      alert("Job not deleted");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 dark:bg-gray-800/50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-brand-gray-500 uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Job Details
              </th>
              <th className="px-6 py-4 text-xs font-bold text-brand-gray-500 uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Location
              </th>
              <th className="px-6 py-4 text-xs font-bold text-brand-gray-500 uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Salary
              </th>

              <th className="px-6 py-4 text-xs font-bold text-brand-gray-500 uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-brand-gray-500 uppercase tracking-wider border-b border-border-light dark:border-border-dark text-right">
                Management
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-border-dark">
            {jobs.map((job) => (
              <tr
                key={job._id}
                className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors"
              >
                {/* Job Details */}
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="font-bold text-navy dark:text-white">
                      {job.title}
                    </span>
                    <span className="text-xs text-brand-gray-500 font-medium">
                      {job.category}
                    </span>
                  </div>
                </td>

                {/* Date */}
                <td className="px-6 py-5 text-sm text-brand-gray-500 font-medium">
                  {job.location}
                </td>

                <td className="px-6 py-5 text-sm text-brand-gray-500 font-medium">
                  {job.salary}
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  {job.status === "live" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-bold text-brand-secondary border border-brand-secondary/20">
                      <span className="size-1.5 rounded-full bg-brand-secondary animate-ping"></span>
                      Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-bold text-brand-primary border border-brand-primary/10">
                      <span className="size-1.5 rounded-full bg-brand-primary"></span>
                      Closed
                    </span>
                  )}
                </td>

                {/* Management */}
                <td className="px-6 py-5">
                  <div className="flex justify-end gap-1">
                    <button className="p-2 rounded-lg text-gary-500 bg-gray-200  hover:bg-gray-100 hover:text-navy transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <Link to={`/jobdetails/${job._id}`}>
                          {" "}
                          <MdOutlineRemoveRedEye />
                        </Link>
                      </span>
                    </button>
                    <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 bg-brand-secondary/10 hover:text-navy transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <MdEdit />
                      </span>
                    </button>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="p-2 rounded-lg text-neutral-gray bg-brand-primary/10 hover:bg-brand-primary/30 hover:text-brand-primary transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">
                        <MdDelete />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (unchanged) */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-gray-800/50">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Page 1 of 42
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold text-gray-500 bg-white dark:bg-gray-900 border border-gray-200 dark:border-border-dark rounded-lg hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 text-xs font-bold text-white bg-brand-primary rounded-lg shadow-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
