import React, { useEffect, useState } from "react";
import { MdDownload } from "react-icons/md";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import api from "../../services/api";
// const applications = [
//   {
//     company: "TechNova",
//     jobTitle: "Frontend Developer",
//     position: "Remote",
//     experience: "2+ Years",
//     appliedDate: "12 Mar 2026",
//     status: "Review",
//   },
//   {
//     company: "DesignHub",
//     jobTitle: "UI/UX Designer",
//     position: "Full Time",
//     experience: "3+ Years",
//     appliedDate: "10 Mar 2026",
//     status: "Shortlisted",
//   },
//   {
//     company: "CloudSync",
//     jobTitle: "React Developer",
//     position: "Remote",
//     experience: "1+ Year",
//     appliedDate: "08 Mar 2026",
//     status: "Pending",
//   },
//   {
//     company: "Innovate Labs",
//     jobTitle: "Product Designer",
//     position: "Hybrid",
//     experience: "4+ Years",
//     appliedDate: "05 Mar 2026",
//     status: "Rejected",
//   },
// ];
import { Link, useParams } from "react-router-dom";
const MyApplicationTable = () => {
  const { id } = useParams();
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
        const res = await api.get(`/myapps/${id}`);
        setApplications(res.data.data);
        console.log("applications you submited are founded");
      } catch (err) {
        console.log("applications not found", err);
      }
    };
    fetchApplication();
  }, [id]);

  return (
    <div className="glass-panel rounded-2xl shadow-xl shadow-brand-primary/5 overflow-hidden mt-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          {/* HEADER */}

          <thead>
            <tr className="border-b border-brand-primary/10">
              <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase">
                Company
              </th>

              <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase">
                Job Title
              </th>

              <th className="px-4 py-4 text-xs font-bold text-center text-slate-500 uppercase">
                Experience
              </th>

              <th className="px-4 py-4 text-xs font-bold text-center text-slate-500 uppercase">
                Status
              </th>

              <th className="px-4 py-4 text-xs font-bold text-right text-slate-500 uppercase">
                Download
              </th>
            </tr>
          </thead>

          {/* BODY */}

          <tbody className="divide-y divide-brand-primary/5">
            {currentApplications.slice(0, 5).map((app, idx) => (
              <tr
                key={idx}
                className="hover:bg-brand-primary/[0.05] transition-colors"
              >
                <td className="px-4 py-5 font-semibold text-brand-primary ">
                  {app.company}
                </td>

                <td className="px-4 py-5 text-slate-600">{app.jobTitle}</td>

                <td className="px-4 py-5 text-center">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-secondary/10 text-brand-secondary">
                    {app.Experience}
                  </span>
                </td>

                <td className="px-4 py-5 text-center">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-primary/10 text-brand-primary">
                    {app.status}
                  </span>
                </td>

                <td className="px-4 py-5 text-right">
                  <button className=" bg-brand-primary text-white rounded-lg ">
                    <Link
                      to={`/appdetails/${app._id}`}
                      className="text-xs font-bold hover:scale-105 transition gap-1 inline-flex items-center  px-3 py-2"
                    >
                      {" "}
                      <MdDownload />
                      View Application{" "}
                    </Link>
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
          Showing Total{" "}
          <span className="font-bold text-brand-primary ">
            {applications.length}
          </span>{" "}
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
    </div>
  );
};

export default MyApplicationTable;
