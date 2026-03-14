
import React, { useEffect, useState } from "react";
import { FaRegCheckCircle, FaPlus } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function JobStats() {
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalOnsite, setTotalOnsite] = useState(0);
  const [totalRemote, setTotalRemote] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/post");
        setTotalPosts(res.data.data.length);
      } catch (err) {
        console.error("Total Jobs fetch error:", err);
      }

      try {
        const res = await api.get("/onsite");
        setTotalOnsite(res.data.data.length);
      } catch (err) {
        console.error("Onsite Jobs fetch error:", err);
      }

      try {
        const res = await api.get("/remote");
        setTotalRemote(res.data.data.length);
      } catch (err) {
        console.error("Remote Jobs fetch error:", err);
      }
    };

    fetchJobs();
  }, []);

  // Stats array for map
  const stats = [
    {
      title: "Total Jobs",
      value: totalPosts,
      icon: <FaRegCheckCircle />,
      iconBg: "bg-brand-secondary/10 text-brand-secondary",
      badge: "+12%",
      badgeBg: "bg-brand-secondary/10 text-brand-secondary",
    },
    {
      title: "Remote Jobs",
      value: totalRemote,
      icon: <IoHome />,
      iconBg: "bg-brand-primary/10 text-brand-primary",
      badge: "8 Pending",
      badgeBg: "bg-brand-primary/10 text-brand-primary",
    },
    {
      title: "Onsite Jobs",
      value: totalOnsite,
      icon: <BsFillBuildingsFill />,
      iconBg: "bg-blue-100 text-blue-600",
      badge: "Urgent Hiring",
      badgeBg: "bg-blue-500/10 text-blue-500",
    },
  ];

  return (
    <div className="main flex flex-col">
      <div className="flex flex-wrap justify-between py-5 gap-6 items-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy dark:text-white">
            Job Listings
          </h1>
          <p className="text-sm font-medium text-neutral-gray dark:text-gray-400">
            Manage, track, and moderate all employment opportunities.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg h-12 px-6 bg-brand-primary/80 text-white text-sm font-bold shadow-soft hover:bg-brand-primary hover:shadow-orange-glow transition-all duration-300">
          <FaPlus />
          <Link to="/postjob">Post New Job</Link>
        </button>
      </div>

      {/* Stats cards mapped */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className={`p-2 rounded-lg ${stat.iconBg} text-xl`}>
                {stat.icon}
              </span>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${stat.badgeBg}`}
              >
                {stat.badge}
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy dark:text-white">
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
