import React from "react";

export default function StatsCards({ stats }) {
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
