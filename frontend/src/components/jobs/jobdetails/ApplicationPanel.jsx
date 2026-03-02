import { IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";

const ApplicationPanel = () => (
  <div className=" top-24 space-y-6">
    {/* Application Card */}
    <div className="glass-card p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
      <div className="mb-6 text-center">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
          Interested in this position?
        </p>
        <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider">
          Application closes in 5 days
        </p>
      </div>
      <div className="space-y-4">
        <button className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2">
          <Link to="/application"> Apply Now</Link>
          <IoIosRocket className="text-xl" />
        </button>
      </div>

      {/* Application Progress */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-3">
          <span>Applications</span>
          <span className="font-bold text-slate-900 dark:text-white">45</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-secondary rounded-full"
            style={{ width: "65%" }}
          ></div>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center italic">
          Be among the top 10% of applicants with a tailored CV
        </p>
      </div>
    </div>
  </div>
);

export default ApplicationPanel;
