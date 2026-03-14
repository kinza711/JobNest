import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import api from "../../services/api";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentApplications = jobs.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get("/post");
        setJobs(res.data.data);
      } catch (err) {
        console.log("job not found", err);
      }
    };

    fetchJob();
  }, []);

  if (!jobs.length) return <p>Loading...</p>;

  return (
    <section className="mt-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentApplications.slice(0, 6).map((job, index) => (
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
                  className={`size-12 rounded-full border-2 flex items-center justify-center text-lg
                  ${
                    job.statusColor === "brand-secondary"
                      ? "bg-brand-secondary/10 text-brand-secondary"
                      : job.disabled
                        ? "bg-brand-gray-100 text-brand-gray-400"
                        : "bg-brand-primary/10 text-brand-primary"
                  }`}
                >
                  <span className="animate-pulse text-brand-secondary">
                    {job.status}
                  </span>
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
                  <span>{job.jobType}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-brand-gray-900 dark:text-white leading-tight">
                {job.title}
              </h3>

              <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium mt-1">
                {job.company}
              </p>

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
                  <Link to={`/jobdetails/${job._id}`}>
                    <FiArrowRight />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="px-6 py-4 flex items-center justify-between border-t border-brand-primary/10">
        <p className="text-sm text-slate-500">
          Showing Total{" "}
          <span className="font-bold text-brand-primary ">{jobs.length}</span>{" "}
          to applications
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            className="size-8 flex items-center justify-center rounded-lg border text-slate-400"
          >
            <AiOutlineLeft />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`size-8 flex items-center justify-center rounded-lg text-xs font-bold ${
                currentPage === i + 1
                  ? "bg-brand-primary text-white"
                  : "border text-slate-500"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            className="size-8 flex items-center justify-center rounded-lg border text-slate-400"
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
