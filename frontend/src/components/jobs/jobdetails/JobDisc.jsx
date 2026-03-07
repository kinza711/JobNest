import { FiCheckCircle, FiBriefcase, FiGlobe } from "react-icons/fi";

export default function JobDisc({ job }) {
  return (
    <div className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
      {/* About the Role */}
      <section>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span>{" "}
          <FiBriefcase className="text-brand-secondary" /> About the Role
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {job.disc}
        </p>
      </section>

      {/* Key Responsibilities */}
      <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span>{" "}
          <FiCheckCircle className="text-brand-secondary" /> Key
          Responsibilities
        </h3>
        {job.keys}
      </section>

      {/* Requirements */}
      <section>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span>{" "}
          <FiGlobe className="text-brand-secondary" /> Requirements
        </h3>
        <ul className="space-y-3 list-disc list-inside text-slate-600 dark:text-slate-300">
          <li>{job.requirements}</li>
        </ul>
      </section>
    </div>
  );
}

// export default JobDisc;
