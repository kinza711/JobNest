import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye, MdDelete, MdEdit } from "react-icons/md";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function JobTable() {
  const [jobs, setJobs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
    const fetchApplication = async () => {
      try {
        const res = await api.get("/post");

        setJobs(res.data.data);
        // console.log("Applications fetched successfully");
      } catch (err) {
        console.error("Applications not found", err);
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
      console.error(err, "job not deleted");
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
                Job_Type
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
            {currentApplications.slice(0, 4).map((job) => (
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

                <td className="px-6 py-5 text-sm  text-brand-primary font-medium">
                  <span className="bg-brand-primary/10 p-1 px-2 rounded-full">
                    {job.jobType}
                  </span>
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
                        <Link to={`/postjob/${job._id}`}>
                          {" "}
                          <MdEdit />
                        </Link>
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

      {/* Pagination */}

      <div className="px-6 py-4 flex items-center justify-between border-t border-brand-primary/10">
        <p className="text-sm text-slate-500">
          Showing Total{" "}
          <span className="font-bold text-brand-primary ">{jobs.length}</span>{" "}
          job post
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
    </div>
  );
}
