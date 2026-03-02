import React from "react";

export default function TrafficEngagement({ title, subtitle, data }) {
  return (
    <div className="lg:col-span-1 flex flex-col gap-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="text-xs font-medium text-slate-400">{subtitle}</p>
        </div>
        <div className="flex gap-2 bg-slate-50 dark:bg-slate-800 p-1 rounded-xl">
          {["Week", "Month"].map((btn, idx) => (
            <button
              key={idx}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg ${
                idx === 0
                  ? "bg-white dark:bg-slate-700 text-brand-primary shadow-sm border border-slate-200 dark:border-slate-600"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 font-semibold"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-[320px] flex flex-col justify-end">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 500 200"
        >
          <defs>
            <linearGradient id="grad-orange" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad-green" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[50, 100, 150].map((y, idx) => (
            <line
              key={idx}
              stroke="#f1f5f9"
              strokeWidth="1"
              x1="0"
              x2="500"
              y1={y}
              y2={y}
            ></line>
          ))}

          {/* Paths */}
          {data.map((d, idx) => (
            <path
              key={idx}
              d={d.path}
              fill="url(#grad-green)"
              stroke={d.stroke}
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
          ))}
        </svg>

        <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
            <span key={idx}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
