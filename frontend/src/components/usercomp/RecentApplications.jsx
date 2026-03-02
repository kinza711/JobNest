import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function RecentApplications() {
  const applications = [
    {
      company: "TechNova Solutions",
      icon: "corporate_fare",
      job: "Senior UI Designer",
      date: "Oct 12, 2023",
      status: "Interviewing",
      statusColor:
        "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    },
    {
      company: "Cloud Scale",
      icon: "apartment",
      job: "Product Manager",
      date: "Oct 10, 2023",
      status: "Pending",
      statusColor:
        "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    },
    {
      company: "Global Insight",
      icon: "factory",
      job: "UX Researcher",
      date: "Oct 05, 2023",
      status: "Rejected",
      statusColor:
        "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400",
    },
    {
      company: "Innovate Web",
      icon: "business",
      job: "Frontend Developer",
      date: "Sep 28, 2023",
      status: "Selected",
      statusColor:
        "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
  ];

  return (
    <div className="glass rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-brand-primary flex justify-between items-center">
        <h3 className="text-lg font-bold">Recent Applications</h3>

        <div className="flex items-center gap-2">
          <button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            All
          </button>
          <button className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-500">
            Active
          </button>
          <button className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-500">
            Closed
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          {/* Table Head */}
          <thead className="bg-slate-50/50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Job Title
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Date Applied
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {applications.map((app, index) => (
              <tr
                key={index}
                className="hover:bg-brand-primary/5 transition-colors"
              >
                {/* Company */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm">{app.company}</span>
                  </div>
                </td>

                {/* Job */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {app.job}
                </td>

                {/* Date */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {app.date}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${app.statusColor}`}
                  >
                    {app.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-brand-primary font-bold hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          Showing 1 to 4 of 42 applications
        </span>

        <div className="flex gap-2">
          <button className="size-8 rounded-lg border border-primary/20 flex items-center justify-center text-slate-500 hover:bg-primary/10">
            <span className="material-symbols-outlined text-sm">
              <IoIosArrowBack />
            </span>
          </button>

          <button className="size-8 rounded-lg bg-brand-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">
            1
          </button>

          <button className="size-8 rounded-lg border border-primary/20 flex items-center justify-center text-slate-500 hover:bg-primary/10">
            <span className="material-symbols-outlined text-sm">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
