import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineRemoveRedEye, MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import api from "../../services/api";
import { Link } from "react-router-dom";

const ApplicationDownloads = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentApplications = applications.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(applications.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await api.get("/submit");
        setApplications(res.data.data);
      } catch (err) {
        console.log("application not found", err);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (appId) => {
    try {
      await api.delete(`/app/${appId}`);

      setApplications((prev) => prev.filter((app) => app._id !== appId));

      alert("Application deleted successfully");
    } catch (err) {
      console.log("Delete failed", err);
      alert("Application delete failed");
    }
  };

  return (
    <div className=" space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
          Applications
        </h2>
        <p className="text-sm text-slate-500">
          Manage all job applications submitted by candidates
        </p>
      </div>

      {/* Table */}
      <div className="glass-panel rounded-2xl shadow-xl shadow-brand-primary/5 overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[900px] w-full text-left">
            <thead>
              <tr className="border-b border-brand-primary/10 text-xs">
                <th className="px-4 py-3 font-bold text-slate-500 uppercase">
                  Applicant
                </th>

                <th className="px-4 py-3 font-bold text-slate-500 uppercase">
                  Email
                </th>

                <th className="px-4 py-3 font-bold text-slate-500 uppercase">
                  Contact
                </th>

                <th className="px-4 py-3 text-center font-bold text-slate-500 uppercase">
                  Status
                </th>

                <th className="px-4 py-3 text-center font-bold text-slate-500 uppercase">
                  Experience
                </th>

                <th className="px-4 py-3 font-bold text-slate-500 uppercase">
                  Location
                </th>

                <th className="px-4 py-3 text-right font-bold text-slate-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-brand-primary/5">
              {currentApplications.map((a) => (
                <tr
                  key={a._id}
                  className="hover:bg-brand-primary/[0.05] transition-colors"
                >
                  {/* Applicant */}
                  <td className="px-4 py-3">
                    <p className="font-semibold whitespace-nowrap">
                      {a.fullName}
                    </p>
                  </td>

                  {/* Email */}
                  <td className="px-4 py-3 text-sm break-all">{a.email}</td>

                  {/* Phone */}
                  <td className="px-4 py-3 text-sm whitespace-nowrap">
                    {a.phone}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3 text-center">
                    <span className="px-3 py-1 text-xs rounded-full bg-brand-primary/10 text-brand-primary whitespace-nowrap">
                      {a.status || "Pending"}
                    </span>
                  </td>

                  {/* Experience */}
                  <td className="px-4 py-3 text-center">
                    <span className="px-3 py-1 text-xs rounded-full bg-brand-secondary/10 text-brand-secondary whitespace-nowrap">
                      {a.Experience}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="px-4 py-3 text-sm whitespace-nowrap">
                    {a.location}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(a._id)}
                        className="p-2 bg-gray-400 text-white rounded-lg hover:scale-105 transition"
                      >
                        <MdOutlineDeleteForever />
                      </button>

                      <Link
                        to={`/appdetails/${a._id}`}
                        className="p-2 bg-brand-secondary text-white rounded-lg hover:scale-105 transition"
                      >
                        <MdOutlineRemoveRedEye />
                      </Link>

                      <Link
                        to={`/appdetails/${a._id}`}
                        className="p-2 bg-brand-primary text-white rounded-lg hover:scale-105 transition"
                      >
                        <FiDownload />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}

        <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-primary/10">
          <p className="text-sm text-slate-500">
            Total Applications{" "}
            <span className="font-bold text-brand-primary">
              {applications.length}
            </span>
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              className="size-8 flex items-center justify-center rounded-lg border"
            >
              <AiOutlineLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`size-8 rounded-lg text-xs font-bold ${
                  currentPage === i + 1
                    ? "bg-brand-primary text-white"
                    : "border"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              className="size-8 flex items-center justify-center rounded-lg border"
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDownloads;
