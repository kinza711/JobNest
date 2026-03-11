// import React from "react";
// import { IoLocationSharp } from "react-icons/io5";
// import { IoMdSearch } from "react-icons/io";

// export default function Hero() {
//   return (
//     <>
//       <section className="relative pt-24 pb-32 text-center">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
//           <div className="absolute top-20 left-1/4 size-72 bg-brand-primary/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 right-1/4 size-96 bg-brand-secondary/20 rounded-full blur-3xl"></div>
//         </div>
//         <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto px-4">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold uppercase tracking-widest">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
//             </span>
//             2,400+ New Jobs Added Today
//           </div>
//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] text-brand-gray-900 dark:text-white whitespace-nowrap">
//             <span>The Next Generation </span> <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
//               Career Marketplace
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-brand-gray-500 dark:text-brand-gray-400 max-w-3xl font-medium">
//             Experience a futuristic recruitment platform designed for modern
//             professionals. Intelligent matching, verified employers, and
//             seamless workflow.
//           </p>
//           <div className="mt-8 flex flex-col md:flex-row items-center gap-3 w-full max-w-4xl p-2.5 rounded-3xl md:rounded-full bg-white dark:bg-brand-gray-800 shadow-2xl border border-brand-gray-200 dark:border-brand-gray-700">
//             <div className="flex items-center w-full md:w-auto flex-1 h-14 bg-transparent pl-5">
//               <span className="material-symbols-outlined text-brand-primary">
//                 <IoMdSearch />
//               </span>
//               <input
//                 className="w-full focus:outline-0 border-none bg-transparent h-full placeholder:text-brand-gray-400 px-3 text-base font-medium"
//                 placeholder="Role, skill, or keyword"
//                 type="text"
//               />
//             </div>
//             <div className="hidden md:block w-px h-8 bg-brand-gray-200 dark:bg-brand-gray-700"></div>
//             <div className="flex items-center w-full md:w-auto flex-1 h-14 bg-transparent pl-5">
//               <span className="material-symbols-outlined text-brand-secondary">
//                 <IoLocationSharp />
//               </span>
//               <input
//                 className="w-full focus:outline-0 border-none bg-transparent h-full placeholder:text-brand-gray-400 px-3 text-base font-medium"
//                 placeholder="City or Remote"
//                 type="text"
//               />
//             </div>
//             <button className="w-full md:w-auto min-w-[160px] h-14 rounded-full bg-brand-gray-900 dark:bg-brand-primary text-white text-base font-bold shadow-lg transition-all hover:opacity-90">
//               Find Opportunities
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 text-center">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto px-4">
        {/* New jobs tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
          </span>
          2,400+ New Jobs Added Today
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-brand-gray-900 dark:text-white">
          The Next Generation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
            Career Marketplace
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-brand-gray-500 dark:text-brand-gray-400 max-w-3xl font-medium">
          Experience a futuristic recruitment platform designed for modern
          professionals. Intelligent matching, verified employers, and seamless
          workflow.
        </p>

        {/* Search bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-4xl p-2.5 rounded-3xl md:rounded-full bg-white dark:bg-brand-gray-800 shadow-2xl border border-brand-gray-200 dark:border-brand-gray-700">
          {/* Role input */}
          <div className="flex items-center w-full sm:flex-1 h-14 pl-5 bg-transparent">
            <IoMdSearch className="text-brand-primary text-xl" />
            <input
              className="w-full focus:outline-none border-none bg-transparent h-full placeholder:text-brand-gray-400 px-3 text-base sm:text-sm md:text-base font-medium"
              placeholder="Role, skill, or keyword"
              type="text"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-brand-gray-200 dark:bg-brand-gray-700"></div>

          {/* Location input */}
          <div className="flex items-center w-full sm:flex-1 h-14 pl-5 bg-transparent">
            <IoLocationSharp className="text-brand-secondary text-xl" />
            <input
              className="w-full focus:outline-none border-none bg-transparent h-full placeholder:text-brand-gray-400 px-3 text-base sm:text-sm md:text-base font-medium"
              placeholder="City or Remote"
              type="text"
            />
          </div>

          {/* Search button */}
          <button className="w-full sm:w-auto min-w-[160px] h-14 rounded-full bg-brand-gray-900 dark:bg-brand-primary text-white text-base font-bold shadow-lg transition-all hover:opacity-90">
            Find Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
