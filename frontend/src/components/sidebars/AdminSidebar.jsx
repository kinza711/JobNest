import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { IoBriefcaseSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-72 flex-shrink-0 bg-white border-r border-slate-200 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="flex items-center justify-center size-11 bg-brand-primary rounded-xl text-white shadow-lg shadow-orange-200">
          <span className="material-symbols-outlined text-2xl font-bold">
            <FaUserShield />
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-navy-blue text-lg font-bold leading-none">
            Admin Console
          </h1>
          <p className="text-slate-400 text-xs mt-1 font-medium tracking-wide">
            ENTERPRISE HUB
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1.5 flex-grow">
        <Link
          to="/admindashboard"
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-brand-primary">
            <MdDashboard />
          </span>
          <span className="text-sm font-semibold">Dashboard Overview</span>
        </Link>
        <Link
          to="/usermanagement"
          className="flex items-center gap-3 px-4 py-3 text-brand-primary bg-brand-primary/10 border border-brand-primary/10 rounded-xl transition-all"
        >
          <span className="material-symbols-outlined fill-1">
            <HiUsers />
          </span>
          <span className="text-sm font-semibold">User Management</span>
        </Link>
        <Link
          to="/empmanagement"
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <span className="material-symbols-outlined fill-1">
            <HiUsers />
          </span>
          <span className="text-sm font-semibold">Employee Management</span>
        </Link>
        <Link
          to="/jobmanagement"
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <span className="material-symbols-outlined fill-1">
            <HiUsers />
          </span>
          <span className="text-sm font-semibold">Job Management</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <span className="material-symbols-outlined fill-1">
            <FaUserLarge />
          </span>
          <span className="text-sm font-semibold">Profile</span>
        </Link>
        <Link
          to="/postjob"
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-brand-primary">
            <IoBriefcaseSharp />
          </span>
          <span className="text-sm font-semibold">Job Postings</span>
        </Link>
        <Link
          to="/download"
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-brand-primary">
            <FaCloudDownloadAlt />
          </span>
          <span className="text-sm font-semibold">Download Resume</span>
        </Link>
        <div className="my-4 border-t border-slate-100"></div>
        <Link
          to=""
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-brand-primary">
            <MdOutlineLogout />
          </span>
          <span className="text-sm font-semibold">Logout</span>
        </Link>
      </nav>

      <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
            <span className="material-symbols-outlined">
              <MdOutlineSupportAgent />
            </span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">Support Center</p>
            <p className="text-[10px] text-slate-500">24/7 Priority Access</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
