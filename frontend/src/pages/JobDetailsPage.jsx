// import JobHeader from "../components/jobs/jobdetails/JobHeader";
// import Benefits from "../components/jobs/jobdetails/Benefits";
// import Footer from "../components/partials/Footer";

// import JobDisc from "../components/jobs/jobdetails/JobDisc";
// import ApplicationPanel from "../components/jobs/jobdetails/ApplicationPanel";
// import CompanySnapshot from "../components/jobs/jobdetails/CompanySnapshot";
// import Header from "../components/partials/Header";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import api from "../services/api";
// import UserHeader from "../components/headers/UserHeader";
// import AdminSidebar from "../components/sidebars/AdminSidebar";
// import UserSidebar from "../components/sidebars/UserSidebar";
// export default function JobPage({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const [job, setJob] = useState(null);
//   const { id } = useParams();
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));
//   const role = user?.role;
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

//   if (token) {
//     return (
//       <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
//         {children}
//         {role === "JobSeeker" ? (
//           <UserSidebar
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//           />
//         ) : (
//           <AdminSidebar
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//           />
//         )}

//         <UserHeader setIsSidebarOpen={setIsSidebarOpen} />

//         <main className="px-4 lg:px-20 py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2 space-y-8">
//               <JobHeader job={job} />
//               <JobDisc job={job} />
//               <Benefits />
//             </div>

//             <div className="lg:col-span-1 space-y-5">
//               <ApplicationPanel job={job} />
//               <CompanySnapshot job={job} />
//             </div>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
//       <Header setIsSidebarOpen={setIsSidebarOpen} />

//       <main className="px-4 lg:px-20 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <JobHeader job={job} />
//             <JobDisc job={job} />
//             <Benefits />
//           </div>

//           <div className="lg:col-span-1 space-y-5">
//             <ApplicationPanel job={job} />
//             <CompanySnapshot job={job} />
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// // export default JobPage;

import JobHeader from "../components/jobs/jobdetails/JobHeader";
import Benefits from "../components/jobs/jobdetails/Benefits";
import Footer from "../components/partials/Footer";
import JobDisc from "../components/jobs/jobdetails/JobDisc";
import ApplicationPanel from "../components/jobs/jobdetails/ApplicationPanel";
import CompanySnapshot from "../components/jobs/jobdetails/CompanySnapshot";
import Header from "../components/partials/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import UserHeader from "../components/headers/UserHeader";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import UserSidebar from "../components/sidebars/UserSidebar";

export default function JobPage({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [job, setJob] = useState(null);

  const { id } = useParams();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/job/${id}`);
        setJob(res.data.data);
      } catch (err) {
        console.log("job not found", err);
      }
    };

    fetchJob();
  }, [id]);

  if (!job)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Fixed Sidebar */}
      {children}
      {token &&
        (role === "JobSeeker" ? (
          <UserSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : (
          <AdminSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ))}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        {token ? (
          <UserHeader setIsSidebarOpen={setIsSidebarOpen} />
        ) : (
          <Header setIsSidebarOpen={setIsSidebarOpen} />
        )}

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto">
          <main className="px-4 sm:px-6 lg:px-12 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <JobHeader job={job} />
                <JobDisc job={job} />
                <Benefits />
              </div>

              <div className="space-y-6">
                <ApplicationPanel job={job} />
                <CompanySnapshot job={job} />
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
