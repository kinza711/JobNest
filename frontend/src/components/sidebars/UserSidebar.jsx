import React from "react";
import { MdDashboard } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await api.post("/logout"); // optional if backend logout route exists
      localStorage.removeItem("token");

      alert("You're logged out successfully");

      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Logout failed");
    }
  };

  const location = useLocation();

  const links = [
    {
      icon: <MdDashboard />,
      label: "Dashboard",
      path: "/userdashboard",
    },
    {
      icon: <GrNotes />,
      label: "My Applications",
      path: "/myapplications",
    },
    {
      icon: <IoMdSearch />,
      label: "Job Search",
      path: "/jobs",
    },
    {
      icon: <CgProfile />,
      label: "Profile",
      path: "/profile",
    },
    {
      icon: <MdLogout />,
      label: "Logout",
      path: "/logout",
    },
  ];

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300
       ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        {/* Logo */}
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
            <FaBriefcase className="text-xl" />
          </div>
          <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
            JobPortal
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;

            // Logout button
            if (link.label === "Logout") {
              return (
                <button
                  key={index}
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={index}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
          ${
            isActive
              ? "bg-brand-primary text-white"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Upgrade Card */}
        <div className="p-6">
          <div className="bg-brand-primary/10 dark:bg-brand-primary rounded-2xl p-4 border border-brand-primary">
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Upgrade to Pro
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Get 3x more visibility and direct messages to recruiters.
            </p>
            <button className="w-full bg-brand-primary text-white py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
