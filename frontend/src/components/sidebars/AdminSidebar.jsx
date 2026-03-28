import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { IoBriefcaseSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";

const AdminSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("token");
      alert("you're loggedout successfully");
      navigate("/login");
    } catch (err) {
      alert("you're not loggedout ", err);
      console.error(err);
    }
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <aside
        className={`fixed flex flex-col top-0 py-5 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300
       ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <div className="flex mx-4 items-center gap-3 mb-10 px-2">
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

        <nav className="flex mx-4 flex-col gap-1.5 flex-grow">
          <Link
            to={role == "Admin" ? "/admindashboard" : "/empdashboard"}
            className={`flex items-center gap-3 px-4 py-3  rounded-xl transition-all
  ${
    location.pathname === "/admindashboard" ||
    location.pathname === "/empdashboard"
      ? "text-brand-primary bg-brand-primary/10"
      : "text-slate-500 hover:bg-slate-50"
  }`}
          >
            <MdDashboard />
            <span className="text-sm font-semibold">Dashboard Overview</span>
          </Link>

          <Link
            to="/usermanagement"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${
    location.pathname === "/usermanagement"
      ? "text-brand-primary bg-brand-primary/10"
      : "text-slate-500 hover:bg-slate-50"
  }`}
          >
            <HiUsers />
            <span className="text-sm font-semibold">User Management</span>
          </Link>

          {role === "Admin" && (
            <Link
              to="/empmanagement"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${
    location.pathname === "/empmanagement"
      ? "text-brand-primary bg-brand-primary/10"
      : "text-slate-500 hover:bg-slate-50"
  }`}
            >
              <HiUsers />
              <span className="text-sm font-semibold">HR Management</span>
            </Link>
          )}

          <Link
            to="/jobmanagement"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${
    location.pathname === "/jobmanagement"
      ? "text-brand-primary bg-brand-primary/10"
      : "text-slate-500 hover:bg-slate-50"
  }`}
          >
            <HiUsers />
            <span className="text-sm font-semibold">Job Management</span>
          </Link>

          <Link
            to="/postjob"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${
    location.pathname === "/postjob"
      ? "text-brand-primary bg-brand-primary/10"
      : "text-slate-500 hover:bg-slate-50"
  }`}
          >
            <span className="material-symbols-outlined group-hover:text-brand-primary">
              <IoBriefcaseSharp />
            </span>
            <span className="text-sm font-semibold">Job Postings</span>
          </Link>
          <Link
            to="/download"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${
    location.pathname === "/download"
      ? "text-brand-primary bg-brand-primary/10"
      : "text-slate-500 hover:bg-slate-50"
  }`}
          >
            <span className="material-symbols-outlined group-hover:text-brand-primary">
              <FaCloudDownloadAlt />
            </span>
            <span className="text-sm font-semibold">Download Resume</span>
          </Link>
          <div className="my-4 border-t border-slate-100"></div>
          <Link
            to="/profile"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${
    location.pathname === "/profile"
      ? "text-brand-primary bg-brand-primary/10"
      : "text-slate-500 hover:bg-slate-50"
  }`}
          >
            <span className="material-symbols-outlined fill-1">
              <FaUserLarge />
            </span>
            <span className="text-sm font-semibold">Profile</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group"
          >
            <span className="material-symbols-outlined group-hover:text-brand-primary">
              <MdOutlineLogout />
            </span>
            <span className="text-sm font-semibold">Logout</span>
          </button>
        </nav>

        <div className="mt-auto mx-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
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
    </>
  );
};

export default AdminSidebar;
