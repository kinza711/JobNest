import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedJobs = () => {
  return (
    <>
      {/* Featured Section EXACT SAME */}
      <section class="py-10 bg-[#f1f2f2] dark:bg-brand-gray-900/50 rounded-3xl px-10">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-end mb-5 gap-6">
            <div class="text-left">
              <span class="text-brand-primary font-bold text-sm tracking-widest uppercase">
                Opportunities
              </span>
              <h2 class="text-4xl font-bold tracking-tight mt-2">
                Featured Positions
              </h2>
            </div>
            <button class="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all">
              View all 12,000+ jobs{" "}
              <span class="material-symbols-outlined">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="glass-card bg-[#FCFDFD] group p-8 rounded-xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div class="flex justify-between items-start mb-6">
                <img
                  alt="Company logo"
                  class="w-14 h-14 rounded-xl object-cover bg-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCABU_uL0fUQTkIxL4Dvh5VJj1V2OrP1r-_HNKIZXy2Gyb-CCHfmvP2JNpP1zpbfj-yX0g_Q139ftXrZzRdnQiowzx9zTrLiqEU_cfZX4VYwrkj3cyv4yncJtpAx2YYp60KLCaGscMFe31511PUSv2leWiDvgwfKe5DSQClnSU4xTecaXcsGSscHOiywtyKgH9HATGfOWgU36X6tGSyupBITb3A7vMdzp318DrYoAwXD6YfDZ9hbOPVkxXfwbTHaY-Ct8IAIMpu0yJo"
                />
                <span class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20">
                  New Post
                </span>
              </div>
              <h3 class="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">
                Senior Product Designer
              </h3>
              <p class="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium">
                Innovate Inc. • SF, California
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  Full-time
                </span>
                <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  $140k - $180k
                </span>
              </div>
              <button class="mt-8 w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-bold opacity-100 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Apply Now
              </button>
            </div>
            <div class="glass-card bg-[#FCFDFD] group p-8 rounded-xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div class="flex justify-between items-start mb-6">
                <img
                  alt="Company logo"
                  class="w-14 h-14 rounded-xl object-cover bg-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDX5TH0aFQw8mo9bdlusRu5b6xgHbaPbvVKEedqV6TycUz55vznErF2YeYSx26w5xbc9X3ysBWlWx9X_QZrVmRWY2Ak3ZzgzgpU7QXCoRfAeKjKEG3X4yawSbeIpmi75CGBsQMppXKKrCBLPyYYBk0OoiFBbuJc3DvItVpFVEFAh8yvtz7o6GHybqcnu-QdFSMQ1rKSYDqb2HKWfhW2NgGOjZFCa96k__O_RxopDnnN-1LlErcyXQ7UiXflc43Ylz7A_C5EczDG3OG"
                />
                <span class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                  Featured
                </span>
              </div>
              <h3 class="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">
                Lead Backend Engineer
              </h3>
              <p class="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium">
                Tech Solutions • Remote
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  Remote
                </span>
                <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  Go / AWS
                </span>
              </div>
              <button class="mt-8 w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-bold opacity-100 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Apply Now
              </button>
            </div>
            <div class="glass-card bg-[#FCFDFD] group p-8 rounded-xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-brand-primary/20">
              <div class="flex justify-between items-start mb-6">
                <img
                  alt="Company logo"
                  class="w-14 h-14 rounded-xl object-cover bg-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXJxfqOdE5AAcXvw0_e54uGGvt5cj3qWun8d8sGy6cMQSznLAECTzyup41vjNPE4ZyYtmrEcS-rsinkVTbA4Qz83GOKk0U7V6iDhKbtH-yhI17l7oMhdbx3_TMP6a5rhsRCw_bhGSVOBjtZISuNdrdgLrggw-oWcXoWeNFLYizByzzjcQH1TQ6f5U9m0omDuUEg0OoPOpxNWBXBvJZFmeKRKQbLg-t2PpPykeAZrXHQtBXzWoyexozqBXstb3hMsRYFvf-3DYufMvs"
                />
                <span class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20">
                  Urgent
                </span>
              </div>
              <h3 class="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">
                Growth Marketing Manager
              </h3>
              <p class="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium">
                Creative Co. • NYC / Hybrid
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  Hybrid
                </span>
                <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-600 dark:text-brand-gray-300">
                  SaaS
                </span>
              </div>
              <button class="mt-8 w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-bold opacity-100 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedJobs;
