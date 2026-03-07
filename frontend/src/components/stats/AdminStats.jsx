import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FaBriefcase } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export default function StatsCards() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalOnsite, setTotalOnsite] = useState(0);
  const [totalRemote, setTotalRemote] = useState(0);

  // total users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        setTotalUsers(res.data.data.length);
        //console.log("user  found");
      } catch (err) {
        console.log("user not found", err);
      }
    };
    fetchUsers();
  }, []);

  // total jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/post");
        setTotalPosts(res.data.data.length);
        //console.log("user   found");
      } catch (err) {
        console.log("user not found", err);
      }
    };
    fetchJobs();
  }, []);

  //onsite jobs
  useEffect(() => {
    const Onsite = async () => {
      try {
        const res = await api.get("/onsite");
        setTotalOnsite(res.data.data.length);
        //console.log("user  found");
      } catch (err) {
        console.log("user not found", err);
      }
    };
    Onsite();
  }, []);

  // remote jobs
  useEffect(() => {
    const Remote = async () => {
      try {
        const res = await api.get("/remote");
        setTotalRemote(res.data.data.length);
        //console.log("user  found");
      } catch (err) {
        console.log("user not found", err);
      }
    };
    Remote();
  }, []);

  const stats = [
    {
      icon: <FaBriefcase />,
      iconBg: "bg-brand-primary/30 text-brand-primary",
      title: "Total Job Postings",
      value: totalPosts,
      percentage: "+12.5%",
      percentageBg: "rgba(16,185,129,0.1)",
    },
    {
      icon: <BsFillBuildingsFill />,
      iconBg: "bg-brand-secondary/30 text-brand-secondary",
      title: "Onsite Jobs",
      value: totalOnsite || "Null",
      percentage: "+8.2%",
      percentageBg: "rgba(16,185,129,0.1)",
    },
    {
      icon: <FaHome />,
      iconBg: "bg-slate-300 text-slate-600",
      title: "Remote Jobs",
      value: totalRemote || "Null",
      percentage: "+4.1%",
      percentageBg: "rgba(249,115,22,0.1)",
    },
    {
      icon: <FaUsers />,
      iconBg: "bg-white/40 text-white",
      title: "Total Users",
      value: totalUsers,
      valueColor: "text-white",
      titleColor: "text-white/80",
      border: "border-brand-primary",
      percentage: "Active",
      percentageBg: "white",
      bgColor: "bg-brand-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-2xl ${stat.bgColor} border ${stat.border || "border-slate-200/60"} shadow-sm transition-transform hover:-translate-y-1`}
        >
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2 rounded-lg ${stat.iconBg} text-white `}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            {stat.percentage && (
              <span
                className="text-xs font-bold px-2 py-1 rounded-full"
                style={{ backgroundColor: stat.percentageBg }}
              >
                {stat.percentage}
              </span>
            )}
          </div>
          <p
            className={`text-xs font-bold uppercase tracking-wider ${stat.titleColor || "text-slate-500"}`}
          >
            {stat.title}
          </p>
          <p
            className={`text-3xl font-black mt-1 ${stat.valueColor || "text-slate-900"}`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
