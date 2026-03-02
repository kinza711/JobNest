import React from "react";

export default function JobTable() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft border border-border-light dark:border-border-dark overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 dark:bg-gray-800/50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-neutral-gray uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Job Details
              </th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-gray uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Date Posted
              </th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-gray uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Candidates
              </th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-gray uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-gray uppercase tracking-wider border-b border-border-light dark:border-border-dark text-right">
                Management
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border-light dark:divide-border-dark">
            {/* Row 1 */}
            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-bold text-navy dark:text-white">
                    Senior Cloud Engineer
                  </span>
                  <span className="text-xs text-neutral-gray font-medium">
                    Infrastructure Dept • Remote
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-neutral-gray font-medium">
                May 12, 2024
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-navy dark:text-white">
                    128
                  </span>
                  <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">
                    New: 12
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success border border-success/20">
                  <span className="size-1.5 rounded-full bg-success"></span>
                  Live
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex justify-end gap-1">
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-gray-100 hover:text-navy transition-all">
                    <span className="material-symbols-outlined text-lg">
                      visibility
                    </span>
                  </button>
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-gray-100 hover:text-navy transition-all">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-red-50 hover:text-red-600 transition-all">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-bold text-navy dark:text-white">
                    Product Marketing Manager
                  </span>
                  <span className="text-xs text-neutral-gray font-medium">
                    Growth Team • London, UK
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-neutral-gray font-medium">
                May 10, 2024
              </td>
              <td className="px-6 py-5">
                <span className="text-sm font-bold text-navy dark:text-white">
                  84
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success border border-success/20">
                  <span className="size-1.5 rounded-full bg-success"></span>
                  Live
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex justify-end gap-1">
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-gray-100 hover:text-navy transition-all">
                    <span className="material-symbols-outlined text-lg">
                      visibility
                    </span>
                  </button>
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-gray-100 hover:text-navy transition-all">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-red-50 hover:text-red-600 transition-all">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-bold text-navy dark:text-white">
                    Junior Web Developer
                  </span>
                  <span className="text-xs text-neutral-gray font-medium">
                    Studio • Hybrid
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-neutral-gray font-medium">
                May 08, 2024
              </td>
              <td className="px-6 py-5">
                <span className="text-sm font-bold text-navy dark:text-white">
                  216
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600 border border-orange-200">
                  <span className="size-1.5 rounded-full bg-orange-600"></span>
                  Pending
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex justify-end gap-1">
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-gray-100 hover:text-navy transition-all">
                    <span className="material-symbols-outlined text-lg">
                      visibility
                    </span>
                  </button>
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-gray-100 hover:text-navy transition-all">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg text-neutral-gray hover:bg-red-50 hover:text-red-600 transition-all">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-border-light dark:border-border-dark bg-gray-50 dark:bg-gray-800/50">
        <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
          Page 1 of 42
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold text-neutral-gray bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark rounded-lg hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 text-xs font-bold text-white bg-primary rounded-lg shadow-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
