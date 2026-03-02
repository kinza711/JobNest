import React from "react";

export default function CategoryDistribution({ occupancy, categories }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
        Category Distribution
      </h3>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 120 120">
          <circle
            className="stroke-slate-100 dark:stroke-slate-800"
            cx="60"
            cy="60"
            fill="none"
            r="50"
            strokeWidth="14"
          ></circle>
          {categories.map((cat, idx) => (
            <circle
              key={idx}
              cx="60"
              cy="60"
              fill="none"
              r="50"
              stroke={cat.color}
              strokeDasharray={`${cat.percentage} 100`}
              strokeDashoffset={cat.offset}
              strokeLinecap="round"
              strokeWidth="14"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-black text-slate-900 dark:text-white">
            {occupancy}
          </p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
            Occupancy
          </p>
        </div>
      </div>
      <div className="space-y-3 mt-4">
        {categories.map((cat, idx) => (
          <div className="flex items-center justify-between" key={idx}>
            <div className="flex items-center gap-3">
              <div
                className="size-3 rounded-full"
                style={{ backgroundColor: cat.color }}
              ></div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                {cat.name}
              </span>
            </div>
            <span className="text-xs font-black text-slate-900 dark:text-white">
              {cat.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
