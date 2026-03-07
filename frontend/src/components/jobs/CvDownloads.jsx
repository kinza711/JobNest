import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineRemoveRedEye, MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import api from "../../services/api";
import { Link, useParams } from "react-router-dom";

const ApplicationDownloads = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
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

  // delete logic
  const handleDelete = async (appId) => {
    try {
      const res = await api.delete(`/app/${appId}`);
      alert("Application deleted successfully");
      // Remove it from the UI without reloading
      setApplications((prev) => prev.filter((app) => app._id !== appId));
    } catch (err) {
      console.log("Delete failed", err);
      alert("Application delete failed");
    }
  };

  return (
    <div className="space-y-8">
      <div className="glass-panel rounded-2xl shadow-xl shadow-brand-primary/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="border-b border-brand-primary/10">
                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase">
                  Applicant
                </th>
                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase">
                  Email
                </th>
                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase">
                  Contact
                </th>
                <th className="px-3 py-2 text-xs font-bold text-center text-slate-500 uppercase">
                  Status
                </th>
                <th className="px-3 py-2 text-xs font-bold text-center text-slate-500 uppercase">
                  Experience
                </th>
                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase">
                  Location
                </th>
                <th className="px-3 py-2 text-xs font-bold text-right text-slate-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-brand-primary/5">
              {currentApplications.map((a, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-brand-primary/[0.05] transition-colors"
                >
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={a.img || "https://i.pravatar.cc/150"}
                        alt={a.fullName}
                        className="w-11 h-11 rounded-xl object-cover"
                      />

                      <p className="font-semibold">{a.fullName}</p>
                    </div>
                  </td>

                  <td className="px-3 py-2 text-sm break-all">{a.email}</td>

                  <td className="px-3 py-2 text-sm">{a.phone}</td>

                  <td className="px-3 py-2 text-center">
                    <span className="px-3 py-1 text-xs rounded-full bg-brand-primary/10 text-brand-primary">
                      {a.status}
                    </span>
                  </td>

                  <td className="px-3 py-2 text-center">
                    <span className="px-3 py-1 text-xs rounded-full bg-brand-secondary/10 text-brand-secondary">
                      {a.experience}
                    </span>
                  </td>

                  <td className="px-3 py-2 text-sm break-all">{a.location}</td>

                  <td className="px-3 py-2">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleDelete(a._id)}
                        className="p-2 bg-gray-400 text-white rounded-lg"
                      >
                        <MdOutlineDeleteForever />
                      </button>

                      <button className="p-2 bg-brand-secondary text-white rounded-lg">
                        <Link to={`/appdetails/${a._id}`}>
                          {" "}
                          <MdOutlineRemoveRedEye />{" "}
                        </Link>
                      </button>

                      <button className="p-2 bg-brand-primary text-white rounded-lg">
                        <Link to={`/appdetails/${a._id}`}>
                          {" "}
                          <FiDownload />
                        </Link>
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
