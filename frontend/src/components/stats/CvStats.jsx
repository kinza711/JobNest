import React, { useEffect, useState } from "react";
import {
  FiTrendingUp,
  FiFolder,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";
import api from "../../services/api";

const CvStats = () => {
  const [totalJobs, setTotalJobs] = useState(0);
  const [remoteJobs, setRemoteJobs] = useState(0);
  const [onsiteJobs, setOnsiteJobs] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const resJobs = await api.get("/post");
        setTotalJobs(resJobs.data.data.length);
      } catch (err) {
        console.log("Error fetching total jobs:", err);
      }

      try {
        const resRemote = await api.get("/remote");
        setRemoteJobs(resRemote.data.data.length);
      } catch (err) {
        console.log("Error fetching remote jobs:", err);
      }

      try {
        const resOnsite = await api.get("/onsite");
        setOnsiteJobs(resOnsite.data.data.length);
      } catch (err) {
        console.log("Error fetching onsite jobs:", err);
      }
    };

    fetchStats();
  }, []);

  const summaryCards = [
    {
      title: "Total Jobs",
      value: totalJobs,
      icon: <FiFolder className="text-orange-600" />,
      percent: "+12%",
      percentColor: "text-green-500",
      bgIcon: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      title: "Remote Jobs",
      value: remoteJobs,
      icon: <FiFileText className="text-blue-600" />,
      percent: "This Month",
      percentColor: "text-brand-primary",
      bgIcon: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Onsite Jobs",
      value: onsiteJobs,
      icon: <FiCheckCircle className="text-green-600" />,
      percent: "Updated",
      percentColor: "text-green-500",
      bgIcon: "bg-green-100 dark:bg-green-900/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {summaryCards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-brand-primary/5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`size-10 rounded-xl ${card.bgIcon} flex items-center justify-center`}
            >
              {card.icon}
            </div>
            <span
              className={`${card.percentColor} text-xs font-bold flex items-center gap-1`}
            >
              {card.percent === "Updated" || card.percent === "This Month" ? (
                <>
                  <FiTrendingUp className="text-[14px]" /> {card.percent}
                </>
              ) : (
                card.percent
              )}
            </span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            {card.title}
          </h3>
          <p className="text-2xl font-black mt-1">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default CvStats;
