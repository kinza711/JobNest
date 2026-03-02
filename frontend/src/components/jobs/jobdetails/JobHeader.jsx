import {
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiGlobe,
  FiCreditCard,
} from "react-icons/fi";

const JobHeader = () => (
  <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
    <div className="flex flex-col md:flex-row md:items-start gap-6">
      <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700">
        <img
          className="w-12 h-12"
          src="https://i.pravatar.cc/155"
          alt="Company Logo"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Senior UI/UX Designer
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-6">
          <div className="flex items-center gap-1.5 ">
            <FiBriefcase className="text-brand-primary"/> TechFlow Systems
          </div>
          <div className="flex items-center gap-1.5 ">
            <FiMapPin className="text-brand-primary"/> San Francisco, CA (Hybrid)
          </div>
          <div className="flex items-center gap-1.5 ">
            <FiClock className="text-brand-primary"/> 2 days ago
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
            <FiBriefcase /> Full-time
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
            <FiGlobe /> Remote Friendly
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
            <FiCreditCard /> $140k - $180k
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default JobHeader;
