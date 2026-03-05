import React from "react";
import { FiDownload, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdOutlineRemoveRedEye, MdOutlineEdit } from "react-icons/md";

const applicants = [
  {
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    contact: "+1 (555) 012-3456",
    status: "Hired",
    experience: "8+ Years",
    position: "Product Designer",
    img: "https://i.pravatar.cc/156",
  },
  {
    name: "David Chen",
    email: "d.chen@enterprise.io",
    contact: "+1 (555) 098-7654",
    status: "Shortlisted",
    experience: "5 Years",
    position: "DevOps Engineer",
    img: "https://i.pravatar.cc/151",
  },
  {
    name: "Amara Okafor",
    email: "amara.o@talent.co",
    contact: "+1 (555) 443-2211",
    status: "Review",
    experience: "2 Years",
    position: "Frontend Dev",
    img: "https://i.pravatar.cc/153",
  },
  {
    name: "Marcus Wright",
    email: "marcus.w@techy.com",
    contact: "+1 (555) 777-8899",
    status: "Rejected",
    experience: "12+ Years",
    position: "Head of Engineering",
    img: "https://i.pravatar.cc/155",
  },
];

const ApplicationDownloads = () => {
  return (
    <div className="space-y-8">
      <div className="glass-panel rounded-2xl shadow-xl shadow-brand-primary/5 overflow-hidden">
        <div className="overflow-x-auto ">
          <table className="w-full table-fixed text-left">
            {/* HEADER */}

            <thead>
              <tr className="border-b border-brand-primary/10">
                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest min-w-[220px]">
                  Applicant
                </th>

                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest min-w-[200px]">
                  Email
                </th>

                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest min-w-[180px]">
                  Contact
                </th>

                <th className="px-3 py-4 text-xs font-bold text-center text-slate-500 uppercase tracking-widest min-w-[120px]">
                  Status
                </th>

                <th className="px-3 py-4 text-xs font-bold text-center text-slate-500 uppercase tracking-widest min-w-[120px]">
                  Experience
                </th>

                <th className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest min-w-[180px]">
                  Position
                </th>

                <th className="px-3 py-2 text-xs font-bold text-right text-slate-500 uppercase tracking-widest min-w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>

            {/* BODY */}

            <tbody className="divide-y divide-brand-primary/5">
              {applicants.map((a, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-brand-primary/[0.05] transition-colors"
                >
                  {/* APPLICANT */}

                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={a.img}
                        alt={a.name}
                        className="w-11 h-11 rounded-xl object-cover shadow-sm"
                      />

                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-100">
                          {a.name}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* EMAIL */}

                  <td className="px-3 py-2">
                    <p className="text-sm text-slate-600 dark:text-slate-400 break-all">
                      {a.email}
                    </p>
                  </td>

                  {/* CONTACT */}

                  <td className="px-3 py-2">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {a.contact}
                    </p>
                  </td>

                  {/* STATUS */}

                  <td className="px-3 py-2 text-center">
                    <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-primary/10 text-brand-primary">
                      {a.status}
                    </span>
                  </td>

                  {/* EXPERIENCE */}

                  <td className="px-3 py-2 text-center">
                    <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-secondary/10 text-brand-secondary">
                      {a.experience}
                    </span>
                  </td>

                  {/* POSITION */}

                  <td className="px-3 py-2">
                    <span className="text-sm font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {a.position}
                    </span>
                  </td>

                  {/* ACTIONS */}

                  <td className="px-3 py-2">
                    <div className="flex justify-end items-center gap-1">
                      <button className="p-1.5 bg-gray-400 text-white rounded-lg hover:scale-105 transition">
                        <MdOutlineEdit />
                      </button>

                      <button className="p-1.5 bg-brand-secondary text-white rounded-lg hover:scale-105 transition">
                        <MdOutlineRemoveRedEye />
                      </button>

                      <button className="p-1.5 bg-brand-primary text-white rounded-lg hover:scale-105 transition">
                        <FiDownload />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDownloads;
