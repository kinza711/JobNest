import React from "react";
import {
  FiTrendingUp,
  FiFolder,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

const summaryCards = [
  {
    title: "Total Jobs",
    value: "1,284",
    icon: <FiFolder className="text-orange-600" />,
    percent: "+12%",
    percentColor: "text-green-500",
    bgIcon: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    title: "Remote jobs",
    value: "156",
    icon: <FiFileText className="text-blue-600" />,
    percent: "This Month",
    percentColor: "text-brand-primary",
    bgIcon: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Onsite Jobs",
    value: "92%",
    icon: <FiCheckCircle className="text-green-600" />,
    percent: "Updated",
    percentColor: "text-green-500",
    bgIcon: "bg-green-100 dark:bg-green-900/30",
  },
];

const CvStats = () => {
  return (
    <>
      {/* Summary Cards */}
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
    </>
  );
};

export default CvStats;
