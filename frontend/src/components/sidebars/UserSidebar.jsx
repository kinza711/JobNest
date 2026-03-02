// import React from "react";
// import { MdDashboard } from "react-icons/md";
// import { GrNotes } from "react-icons/gr";
// import { IoMdSearch } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import { MdLogout } from "react-icons/md";
// import { FaBriefcase } from "react-icons/fa";

// export default function Sidebar() {
//   const links = [
//     { icon: <MdDashboard />, label: "Dashboard", active: true },
//     { icon: <GrNotes />, label: "My Applications" },
//     { icon: <IoMdSearch />, label: "Job Search" },
//     { icon: <CgProfile />, label: "Profile" },
//     { icon: <MdLogout />, label: "Logout" },
//   ];

//   return (
//     <aside className="w-72 bg-white dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
//       {/* Logo */}
//       <div className="p-8 flex items-center gap-3">
//         <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
//           <span className="material-symbols-outlined text-2xl">
//             <FaBriefcase />
//           </span>
//         </div>
//         <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
//           JobPortal
//         </h2>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
//         {links.map((link, index) => (
//           <a
//             key={index}
//             href="#"
//             className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
//               ${
//                 link.active
//                   ? "bg-brand-primary text-white"
//                   : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
//               }`}
//           >
//             <span className="material-symbols-outlined">{link.icon}</span>
//             <span className="font-medium">{link.label}</span>
//           </a>
//         ))}
//       </nav>

//       {/* Upgrade Card */}
//       <div className="p-6">
//         <div className="bg-brand-primary/10 dark:bg-brand-primary rounded-2xl p-4 border border-brand-primary">
//           <p className="text-sm font-semibold text-brand-primary mb-2">
//             Upgrade to Pro
//           </p>
//           <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
//             Get 3x more visibility and direct messages to recruiters.
//           </p>
//           <button className="w-full bg-brand-primary text-white py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all">
//             Upgrade Now
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }

import React from "react";
import { MdDashboard } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
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
    <aside className="w-72 bg-white dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
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
  );
}
