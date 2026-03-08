import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function RecentApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await api.get("/post");
        setApplications(res.data.data);
        console.log("Applications fetched successfully");
      } catch (err) {
        console.log("Applications not found", err);
      }
    };
    fetchApplication();
  }, []);

  return (
    <div className="glass rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-brand-primary flex justify-between items-center">
        <h3 className="text-lg font-bold">All Jobs Posts</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Job Title
              </th>
              <th className="px-6 py-4  text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Location
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Salary
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {applications.slice(0, 4).map((app, index) => (
              <tr
                key={index}
                className="hover:bg-brand-primary/5 transition-colors"
              >
                {/* Job Title + Company in single column */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{app.title}</span>
                    <span className="text-slate-500 text-xs">
                      {app.company}
                    </span>
                  </div>
                </td>

                {/* status */}
                <td className="px-6 py-4 items-center justify-center flex whitespace-nowrap text-sm text-center">
                  <span
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border flex items-center gap-1 ${
                      app.status === "live"
                        ? "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20"
                        : app.status === "closed"
                          ? "bg-brand-primary/10 text-brand-primary border-brand-secondary/20"
                          : "bg-gray-100 text-gray-600 border-gray-300"
                    }`}
                  >
                    {app.status === "live" && (
                      <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></span>
                    )}

                    {app.status}
                  </span>
                </td>
                {/* Location */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                  {app.location}
                </td>

                {/* Salary */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                  {app.salary}
                </td>

                {/* Action */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <Link
                    to={`/jobdetails/${app._id}`}
                    className="text-brand-primary font-bold hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-sm text-slate-500 ">
          Showing Total{" "}
          <span className="text-brand-primary font-bold">
            {applications.length}
          </span>{" "}
          applications
        </span>
      </div>
    </div>
  );
}
