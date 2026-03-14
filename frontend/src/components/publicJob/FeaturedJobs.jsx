
// FeaturedJobs.jsx
import React, { useState, useEffect } from "react";
import JobCards from "../publicJob/JobCards";
import api from "../../services/api";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

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
    const fetchJobs = async () => {
      try {
        const res = await api.get("/post"); // your API endpoint
        setJobs(res.data.data);
      } catch (err) {
        console.log("Jobs not found", err);
      }
    };
    fetchJobs();
  }, []);

  if (!jobs.length) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="py-16 bg-brand-gray-50 rounded-3xl dark:bg-brand-gray-900">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-bold text-brand-gray-900 dark:text-white">
          Featured <span className="text-brand-primary">Opportunities</span>
        </h3>
        <p className="text-brand-gray-500 mt-2">
          Hand-picked roles from top startups and enterprise teams
        </p>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10">
        {currentApplications.slice(0, 2).map((job, index) => (
          <JobCards key={job._id || index} job={job} />
        ))}
      </div>
      {/* Pagination */}

      <div className="px-6 py-4 flex items-center justify-between border-t border-brand-primary/10">
        <p className="text-sm text-slate-500">
          Showing Total{" "}
          <span className="font-bold text-brand-primary ">{jobs.length}</span>{" "}
          features jobs
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            className="size-8 flex items-center justify-center rounded-lg border text-slate-400"
          >
            <AiOutlineLeft />
          </button>

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

export default FeaturedJobs;
