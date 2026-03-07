import {
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiGlobe,
  FiCreditCard,
} from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";

export default function JobHeader({ job }) {
  return (
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
            <span className="text-brand-primary">{job.title}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center gap-1.5 ">
              <FiBriefcase className="text-brand-primary" />
              {job.company}
            </div>
            <div className="flex items-center gap-1.5 ">
              <FiMapPin className="text-brand-primary" />
              {job.location}
              (Hybrid)
            </div>
            <div className="flex items-center gap-1.5">
              <FiClock className="text-brand-primary" />
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
              <FiBriefcase /> {job.jobType}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
              <FiGlobe /> {job.industry}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
              <FiCreditCard /> {job.salary}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default JobHeader;

// component with fetch data

// import { useEffect, useState } from "react";
// import {
//   FiBriefcase,
//   FiMapPin,
//   FiClock,
//   FiGlobe,
//   FiCreditCard,
// } from "react-icons/fi";
// import { useParams } from "react-router-dom";

// import api from "../../../services/api";

// export default function JobHeader() {
//   const [job, setJob] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await api.get(`/job/${id}`);
//         setJob(res.data.data);
//       } catch (err) {
//         console.log("job not found", err);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   if (!job) return <p>Loading...</p>;

//   return (
//     <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
//       <div className="flex flex-col md:flex-row md:items-start gap-6">
//         <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700">
//           <img
//             className="w-12 h-12"
//             src="https://i.pravatar.cc/155"
//             alt="Company Logo"
//           />
//         </div>

//         <div className="flex-1">
//           <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
//             <span className="text-brand-primary">{job.title}</span>
//           </h1>

//           <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-6">
//             <div className="flex items-center gap-1.5">
//               <FiBriefcase className="text-brand-primary" /> {job.company}
//             </div>

//             <div className="flex items-center gap-1.5">
//               <FiMapPin className="text-brand-primary" /> {job.location}{" "}
//               (Hybrid)
//             </div>

//             <div className="flex items-center gap-1.5">
//               <FiClock className="text-brand-primary" /> 2 days ago
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
//               <FiBriefcase /> {job.jobType}
//             </span>

//             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
//               <FiGlobe /> {job.remote}
//             </span>

//             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-lg">
//               <FiCreditCard /> {job.salary}
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
