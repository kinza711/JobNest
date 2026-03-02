import React from "react";
import {
  FiMonitor,
  FiShield,
  FiDatabase,
  FiBarChart2,
  FiCloud,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Senior Frontend Architect",
    company: "Stellar Systems • Remote",
    salary: "$140k - $180k",
    skills: ["React", "Tailwind", "Next.js"],
    icon: <FiMonitor />,
    status: "NEW",
    statusColor: "brand-primary",
  },
  {
    title: "Lead UX Product Designer",
    company: "Creative Pulse • Hybrid",
    salary: "$120k - $155k",
    skills: ["Figma", "Research"],
    icon: <FiShield />,
    status: "OPEN",
    statusColor: "brand-secondary",
  },
  {
    title: "Backend Node.js Engineer",
    company: "DataFlow Inc • NYC / Remote",
    salary: "$150k - $210k",
    skills: ["PostgreSQL", "AWS"],
    icon: <FiDatabase />,
    status: "NEW",
    statusColor: "brand-primary",
  },
  {
    title: "Growth Marketing Manager",
    company: "ScaleUp Labs • London",
    salary: "$90k - $130k",
    skills: ["SEO", "Analytics"],
    icon: <FiBarChart2 />,
    status: "OPEN",
    statusColor: "brand-primary",
  },
  {
    title: "DevOps Infrastructure Lead",
    company: "CloudSphere • Remote",
    salary: "$170k - $220k",
    skills: ["Kubernetes", "Terraform"],
    icon: <FiCloud />,
    status: "OPEN",
    statusColor: "brand-secondary",
  },
  {
    title: "Visual Identity Designer",
    company: "Design Studio X • Paris",
    salary: "$60k - $85k",
    skills: ["Branding"],
    icon: <FiLock />,
    status: "CLOSED",
    disabled: true,
  },
];

const AllJobs = () => {
  return (
    <section className="mt-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 border 
            ${
              job.disabled
                ? "opacity-70 border-brand-gray-200 dark:border-brand-gray-700"
                : "border-brand-gray-200 dark:border-brand-gray-700 hover:border-brand-primary"
            }
            bg-white dark:bg-brand-gray-800`}
          >
            <div
              className={`h-2 ${
                job.statusColor === "brand-secondary"
                  ? "bg-brand-secondary"
                  : job.disabled
                    ? "bg-brand-gray-300"
                    : "bg-brand-primary"
              }`}
            />

            <div className="p-6 flex flex-col flex-1">
              {/* Top */}
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`size-12 rounded-xl flex items-center justify-center text-lg
                  ${
                    job.statusColor === "brand-secondary"
                      ? "bg-brand-secondary/10 text-brand-secondary"
                      : job.disabled
                        ? "bg-brand-gray-100 text-brand-gray-400"
                        : "bg-brand-primary/10 text-brand-primary"
                  }`}
                >
                  {job.icon}
                </div>

                <span
                  className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border
                  ${
                    job.disabled
                      ? "bg-brand-gray-100 text-brand-gray-500 border-brand-gray-200"
                      : job.statusColor === "brand-secondary"
                        ? "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20"
                        : "bg-brand-primary/10 text-brand-primary border-brand-primary/20"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-brand-gray-900 dark:text-white leading-tight">
                {job.title}
              </h3>

              <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium mt-1">
                {job.company}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300 text-[10px] font-bold rounded-lg uppercase tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6 flex items-center justify-between  border-gray-200  mt-6">
                <div>
                  <p className="text-xs font-bold text-brand-gray-400 uppercase tracking-widest">
                    Salary Range
                  </p>
                  <p className="text-sm font-black text-brand-gray-900 dark:text-white">
                    {job.salary}
                  </p>
                </div>

                <button
                  disabled={job.disabled}
                  className={`p-2 rounded-lg transition-colors
                  ${
                    job.disabled
                      ? "bg-brand-gray-200 text-brand-gray-400 cursor-not-allowed"
                      : "bg-brand-primary text-white hover:bg-brand-secondary"
                  }`}
                >
                  <Link to="/jobdetails">
                    <FiArrowRight />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-6">
        <button className="px-5 py-2.5 rounded-xl border border-brand-gray-200 dark:border-brand-gray-700 text-sm font-bold text-brand-gray-600 dark:text-brand-gray-400 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 transition-colors">
          Previous
        </button>

        <div className="flex gap-2">
          <button className="size-10 rounded-xl bg-brand-primary text-white font-bold text-sm">
            1
          </button>
          <button className="size-10 rounded-xl bg-white dark:bg-brand-gray-800 border border-brand-gray-200 dark:border-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-400 font-bold text-sm hover:border-brand-primary transition-colors">
            2
          </button>
          <button className="size-10 rounded-xl bg-white dark:bg-brand-gray-800 border border-brand-gray-200 dark:border-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-400 font-bold text-sm hover:border-brand-primary transition-colors">
            3
          </button>
        </div>

        <button className="px-5 py-2.5 rounded-xl border border-brand-gray-200 dark:border-brand-gray-700 text-sm font-bold text-brand-gray-600 dark:text-brand-gray-400 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 transition-colors">
          Next
        </button>
      </div>
    </section>
  );
};

export default AllJobs;
