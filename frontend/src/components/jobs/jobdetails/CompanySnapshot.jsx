import { FiUsers, FiGlobe } from "react-icons/fi";
import { MdMonetizationOn } from "react-icons/md";

export default function CompanySnapshot({ job }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
      <h4 className="font-bold text-slate-900 dark:text-white mb-4">
        Company Snapshot
      </h4>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <FiUsers className="text-brand-primary" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Company Size</p>
            <p className="text-sm font-semibold">{job.companySize}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <FiGlobe className="text-brand-primary" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Industry</p>
            <p className="text-sm font-semibold">{job.industry}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <MdMonetizationOn className="text-brand-primary" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Salary</p>
            <div className="flex items-center gap-1">
              <p className="text-sm font-semibold">{job.salary}</p>
              <div className="flex text-amber-400 scale-75 origin-left"></div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="block text-center text-brand-primary text-sm font-bold mt-6 hover:underline underline-offset-4"
        href="#"
      >
        View Company Profile
      </a>
    </div>
  );
}

// export default CompanySnapshot;
