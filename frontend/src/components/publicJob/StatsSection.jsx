import React from "react";

const stats = [
  { value: "45k+", label: "Active Candidates", color: "text-brand-primary" },
  { value: "12k+", label: "Hired Monthly", color: "text-brand-secondary" },
  { value: "8k+", label: "Verified Companies", color: "text-brand-primary" },
  { value: "98%", label: "Success Rate", color: "text-brand-secondary" },
];

const StatsSection = () => {
  return (
    <section className="mt-24 py-14 px-6 border border-brand-gray-200 dark:border-brand-gray-700 rounded-3xl bg-brand-gray-50 dark:bg-brand-gray-800/40 flex flex-wrap justify-center gap-12 md:gap-24 text-center">

      {stats.map((stat, index) => (
        <div key={index} className="group">
          <p className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>
            {stat.value}
          </p>
          <p className="text-brand-gray-500 dark:text-brand-gray-400 font-medium">
            {stat.label}
          </p>
        </div>
      ))}

    </section>
  );
};

export default StatsSection;