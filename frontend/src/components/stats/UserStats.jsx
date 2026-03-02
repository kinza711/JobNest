import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdSensorOccupied } from "react-icons/md";

const stats = [
  {
    title: "Total Users",
    value: "1,284",
    change: "+12%",
    icon: <FaUsers />,
    color: "brand-secondary",
  },
  {
    title: "Employee",
    value: "842",
    change: "Live Status",
    icon: <FaBriefcase />,
    color: "brand-secondary",
  },
  {
    title: "Job Seeker",
    value: "18",
    change: "Action required",
    icon: <MdSensorOccupied />,
    color: "brand-primary",
  },
];

const UserStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between"
        >
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">
              {stat.title}
            </p>
            <h3 className="text-2xl font-black text-navy-blue">{stat.value}</h3>
            <p
              className={`text-${stat.color} text-[10px] font-bold mt-2 flex items-center gap-1`}
            >
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>{" "}
              {stat.change}
            </p>
          </div>
          <div
            className={`size-14 bg-${stat.color}-50 rounded-2xl flex items-center justify-center text-${stat.color}`}
          >
            <span className="material-symbols-outlined text-3xl">
              {stat.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
