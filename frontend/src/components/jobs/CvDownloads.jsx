import React from "react";
import { FiDownload, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const applicants = [
  {
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    contact: "+1 (555) 012-3456",
    experience: "8+ Years",
    position: "Senior Product Designer",
    img: "https://i.pravatar.cc/156",
  },
  {
    name: "David Chen",
    email: "d.chen@enterprise.io",
    contact: "+1 (555) 098-7654",
    experience: "5 Years",
    position: "DevOps Engineer",
    img: "https://i.pravatar.cc/151",
  },
  {
    name: "Amara Okafor",
    email: "amara.o@talent.co",
    contact: "+1 (555) 443-2211",
    experience: "2 Years",
    position: "Junior Frontend Dev",
    img: "https://i.pravatar.cc/153",
  },
  {
    name: "Marcus Wright",
    email: "marcus.w@techy.com",
    contact: "+1 (555) 777-8899",
    experience: "12+ Years",
    position: "Head of Engineering",
    img: "https://i.pravatar.cc/155",
  },
];

const ApplicationDownloads = () => {
  return (
    <div className="space-y-8">
      {/* Table */}
      <div className="glass-panel rounded-2xl shadow-xl shadow-brand-primary/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-primary/10">
                {[
                  "Applicant Name",
                  "Email Address",
                  "Contact",
                  "Experience",
                  "Position",
                  "Actions",
                ].map((th, i) => (
                  <th
                    key={i}
                    className={`px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest ${
                      i === 3 ? "text-center" : i === 5 ? "text-right" : ""
                    }`}
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-primary/5">
              {applicants.map((a, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-brand-primary/[0.05] transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={a.img}
                        alt={a.name}
                        className="size-10 rounded-xl object-cover shadow-sm"
                      />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100">
                          {a.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          Applied recently
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {a.email}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {a.contact}
                    </p>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-brand-secondary/10 text-brand-secondary dark:bg-brand-secondary/20 dark:text-brand-secondary">
                      {a.experience}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {a.position}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-lg text-xs font-bold shadow-sm hover:scale-105 transition-transform active:scale-95">
                      <FiDownload className="text-[16px]" /> Download CV
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-brand-primary/10">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-900 dark:text-slate-100">
              1
            </span>{" "}
            to{" "}
            <span className="font-bold text-slate-900 dark:text-slate-100">
              4
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-900 dark:text-slate-100">
              24
            </span>{" "}
            applicants
          </p>
          <div className="flex items-center gap-2">
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-colors">
              <FiChevronLeft />
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`size-8 flex items-center justify-center rounded-lg text-xs font-bold ${
                  n === 1
                    ? "bg-brand-primary text-white"
                    : "border border-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {n}
              </button>
            ))}
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-colors">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDownloads;
