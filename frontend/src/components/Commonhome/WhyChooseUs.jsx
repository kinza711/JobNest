import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <>
      <section class="py-24 max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="relative ">
            <div className="pulse w-36 h-36 animate-pulse rounded-3xl translate-x-120 translate-y-20 bg-brand-primary"></div>
            <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Team meeting"
                class="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj336AIHEyyEMxpte31ZT-vSk3_Wl0TUz7zgDtx78VAah9mH0a_Q3Z_hTQ03bUZ4uPLCJGtPJD36hp7sYicN-x3BhjgaYg51zhD59bQLfMO9L0vZ8N-jEA82r_NlVp-wwdnXwSJhpZfN_8thuJcDCgLF1NMqG5l_MHa41-MaP32lThcCo5JB6stEcAg86HerH0bxEQMW2uBZPl8GDx7PIhkgkmqqRFXJdmQLeQRmZ4MuI5t7c1TrFJ07DU1xL6lY-qzTFkiqytUo0Q"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <div class="text-white">
                  <p class="text-3xl font-bold">10M+</p>
                  <p class="text-sm font-medium text-gray-300 mb-5">
                    Matches made globally
                  </p>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-6 -left-6 px-8 py-6 glass-card rounded-xl shadow-xl z-20">
              <div class="flex items-center gap-3 bg-amber-50 rounded-full px-1 py-1 my-2">
                <div class="size-10 bg-brand-secondary rounded-full flex items-center justify-center text-white">
                  <span class="material-symbols-outlined">
                    <FaRegCircleCheck />
                  </span>
                </div>
                <div>
                  <p class="text-sm font-bold">Enterprise Grade</p>
                  <p class="text-xs text-brand-gray-500">
                    Security &amp; Trust
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <span class="text-brand-primary font-bold tracking-widest uppercase text-sm">
              Our Mission
            </span>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight">
              Rewiring how the world{" "}
              <span class="text-brand-secondary italic">connects</span> and
              works.
            </h2>
            <p class="text-lg text-brand-gray-600 dark:text-brand-gray-400 font-medium">
              We're not just a job board. We are an ecosystem that empowers
              professionals to find purpose and companies to build exceptional
              teams through data-driven matching and human-centric design.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-brand-gray-700 dark:text-brand-gray-300 font-semibold">
                <span class="material-symbols-outlined text-brand-secondary">
                  <FaRegCircleCheck />
                </span>
                AI-Powered Candidate Ranking
              </li>
              <li class="flex items-center gap-3 text-brand-gray-700 dark:text-brand-gray-300 font-semibold">
                <span class="material-symbols-outlined text-brand-secondary">
                  <FaRegCircleCheck />
                </span>
                End-to-End Recruitment Workflow
              </li>
              <li class="flex items-center gap-3 text-brand-gray-700 dark:text-brand-gray-300 font-semibold">
                <span class="material-symbols-outlined text-brand-secondary">
                  <FaRegCircleCheck />
                </span>
                Transparent Salary &amp; Benefits Data
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
