import React from "react";

export default function JobStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Total Jobs */}
      <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark shadow-soft">
        <div className="flex items-center justify-between">
          <span className="p-2 bg-success/10 text-success rounded-lg material-symbols-outlined">
            check_circle
          </span>
          <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">
            +12%
          </span>
        </div>
        <div>
          <p className="text-2xl font-bold text-navy dark:text-white">1,482</p>
          <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
            Total Jobs
          </p>
        </div>
      </div>

      {/* Remote Jobs */}
      <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark shadow-soft">
        <div className="flex items-center justify-between">
          <span className="p-2 bg-orange-100 text-orange-600 rounded-lg material-symbols-outlined">
            hourglass_empty
          </span>
          <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
            8 Pending
          </span>
        </div>
        <div>
          <p className="text-2xl font-bold text-navy dark:text-white">45</p>
          <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
            Remote Jobs
          </p>
        </div>
      </div>

      {/* Onsite Jobs */}
      <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark shadow-soft">
        <div className="flex items-center justify-between">
          <span className="p-2 bg-gray-100 text-gray-600 rounded-lg material-symbols-outlined">
            group
          </span>
        </div>
        <div>
          <p className="text-2xl font-bold text-navy dark:text-white">12,840</p>
          <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
            Onsite Jobs
          </p>
        </div>
      </div>

      

    </div>
  );
}