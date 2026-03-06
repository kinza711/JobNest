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

const MyApplicationTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await api.get("/submit");
        setApplications(res.data.data);
        console.log("applications you submited are founded");
      } catch (err) {
        console.log("applications not found", err);
      }
    };
    fetchApplication();
  }, []);

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

              {/* <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase">
                Position
              </th> */}

              <th className="px-4 py-4 text-xs font-bold text-center text-slate-500 uppercase">
                Experience
              </th>

              {/* <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase">
                Relocate
              </th> */}

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
            {applications.map((app, idx) => (
              <tr
                key={idx}
                className="hover:bg-brand-primary/[0.05] transition-colors"
              >
                <td className="px-4 py-5 font-semibold text-brand-primary ">
                  {app.company}
                </td>

                <td className="px-4 py-5 text-slate-600">{app.jobTitle}</td>

                {/* <td className="px-4 py-5 text-slate-600">{app.position}</td> */}

                <td className="px-4 py-5 text-center">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-secondary/10 text-brand-secondary">
                    {app.Experience}
                  </span>
                </td>

                {/* <td className="px-4 py-5 text-slate-500">{app.relocate}</td> */}

                <td className="px-4 py-5 text-center">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-primary/10 text-brand-primary">
                    {app.status}
                  </span>
                </td>

                <td className="px-4 py-5 text-right">
                  <button className="inline-flex items-center gap-1 px-3 py-2 bg-brand-primary text-white rounded-lg text-xs font-bold hover:scale-105 transition">
                    <MdDownload />
                    Download CV
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
          Showing <span className="font-bold">1</span> to{" "}
          <span className="font-bold">4</span> of{" "}
          <span className="font-bold">12</span> applications
        </p>

        <div className="flex items-center gap-2">
          <button className="size-8 flex items-center justify-center rounded-lg border text-slate-400">
            <AiOutlineLeft />
          </button>

          <button className="size-8 flex items-center justify-center rounded-lg bg-brand-primary text-white text-xs font-bold">
            1
          </button>

          <button className="size-8 flex items-center justify-center rounded-lg border text-slate-500 text-xs font-bold">
            2
          </button>

          <button className="size-8 flex items-center justify-center rounded-lg border text-slate-400">
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyApplicationTable;
