import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const users = [
  {
    name: "Alex Johnson",
    email: "alex.j@example.com",
    Titel: "Admin",
    initials: "AJ",
    color: "orange",
  },
  {
    name: "Brenda Smith",
    email: "brenda.s@example.com",
    Titel: "Employee",
    initials: "BS",
    color: "blue",
  },
  {
    name: "Charlie Brown",
    email: "charlie.b@example.com",
    Titel: "User",
    initials: "CB",
    color: "green",
  },
  {
    name: "Diana Prince",
    email: "diana.p@example.com",
    Titel: "User",
    initials: "DP",
    color: "blue",
  },
  {
    name: "Ethan Hunt",
    email: "ethan.h@example.com",
    Titel: "Employee",
    initials: "EH",
    color: "orange",
  },
];

const UserTable = () => {
  return (
    <div className="glass-panel rounded-2xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/40">
      <div className="px-8 py-5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h4 className="font-bold text-slate-800">User List</h4>
          <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
            <span className="size-2 rounded-full bg-brand-secondary"></span>
            <span className="text-[11px] font-bold text-slate-600">
              42 Members Online
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-brand-primary transition-colors">
            <span className="material-symbols-outlined">
              <FaFilter />
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Member
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Email
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Titel
              </th>

              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50 transition-colors group"
              >
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-10 rounded-full bg-${user.color}-100 flex items-center justify-center text-${user.color}-600 font-bold text-sm`}
                    >
                      {user.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-xs text-slate-400">{user.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-brand-primary/10 text-slate-600 rounded-lg text-xs font-bold">
                    {user.Titel}
                  </span>
                </td>

                <td className="px-8 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="size-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-brand-secondary hover:border-brand-secondary transition-all flex items-center justify-center"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-lg">
                        <MdModeEditOutline />
                      </span>
                    </button>

                    <button
                      className="size-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-500 transition-all flex items-center justify-center"
                      title="Delete"
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
    </div>
  );
};

export default UserTable;
