import React from "react";
import { MdDownload } from "react-icons/md"; // download icon
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // pagination
import { FaUserCircle } from "react-icons/fa"; // placeholder user

const applicants = [
  {
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    contact: "+1 (555) 012-3456",
    experience: "8+ Years",
    position: "Senior Product Designer",
    status: "Applied recently",
    avatar: "https://i.pravatar.cc/151",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    contact: "+1 (555) 987-6543",
    experience: "5+ Years",
    position: "UX Research Lead",
    status: "Pending Review",
    avatar: "https://i.pravatar.cc/152",
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    contact: "+1 (555) 654-3210",
    experience: "3+ Years",
    position: "Interface Designer",
    status: "Rejected",
    avatar: "https://i.pravatar.cc/153",
  },
  {
    name: "Bob Williams",
    email: "bob.w@example.com",
    contact: "+1 (555) 112-3344",
    experience: "6+ Years",
    position: "Visual Designer",
    status: "Under Consideration",
    avatar: "https://i.pravatar.cc/155",
  },
];

const MyAppTable = () => {
  return (
    <div className="glass-panel rounded-2xl shadow-xl shadow-brand-primary/5 overflow-hidden mt-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-brand-primary/10">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Applicant Name
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Email
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Contact
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
                Experience
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Position
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-primary/5">
            {applicants.map((app, idx) => (
              <tr
                key={idx}
                className="hover:bg-brand-primary/[0.05] transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    {app.avatar ? (
                      <img
                        src={app.avatar}
                        alt={app.name}
                        className="w-10 h-10 rounded-xl object-cover shadow-sm"
                      />
                    ) : (
                      <FaUserCircle className="w-10 h-10 text-slate-400" />
                    )}
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">
                        {app.name}
                      </p>
                      <p className="text-xs text-slate-500">{app.status}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                  {app.email}
                </td>
                <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">
                  {app.contact}
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-brand-secondary/10 text-brand-secondary dark:bg-brand-secondary/20 dark:text-brand-secondary">
                    {app.experience}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {app.position}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-lg text-xs font-bold shadow-sm hover:scale-105 transition-transform active:scale-95">
                    <MdDownload /> Download CV
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
            <AiOutlineLeft />
          </button>
          <button className="size-8 flex items-center justify-center rounded-lg bg-brand-primary text-white text-xs font-bold">
            1
          </button>
          <button className="size-8 flex items-center justify-center rounded-lg border border-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold">
            2
          </button>
          <button className="size-8 flex items-center justify-center rounded-lg border border-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold">
            3
          </button>
          <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-colors">
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAppTable;
