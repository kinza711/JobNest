import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import api from "../../services/api";

export default function UserStats() {
  const [totalSubmit, setTotalSubmit] = useState(0);
  const [totalRejected, setTotalRejected] = useState(0);
  const [totalShort, setTotalShort] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/submit");
        setTotalSubmit(res.data.data.length);
      } catch (err) {
        console.log("Total Jobs fetch error:", err);
      }

      try {
        const res = await api.get("/rejected");
        setTotalRejected(res.data.data.length);
      } catch (err) {
        console.log("Onsite Jobs fetch error:", err);
      }

      try {
        const res = await api.get("/short");
        setTotalShort(res.data.data.length);
      } catch (err) {
        console.log("Remote Jobs fetch error:", err);
      }
    };

    fetchJobs();
  }, []);

  const stats = [
    {
      icon: <FiSend />,
      label: "Applications Sent",
      value: totalSubmit,
      color: "text-brand-primary",
      bg: "bg-brand-primary/10",
    },
    {
      icon: <FaRegCalendarCheck />,
      label: "Shortlisted",
      value: totalShort,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: <MdOutlineRemoveRedEye />,
      label: "Rejected applications",
      value: totalRejected,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color}`}
            >
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>

            <span className="text-emerald-500 text-sm font-bold">+5%</span>
          </div>

          <p className="text-slate-500 text-sm font-medium uppercase">
            {stat.label}
          </p>

          <p className="text-4xl font-black mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
