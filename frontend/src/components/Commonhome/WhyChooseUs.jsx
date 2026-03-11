import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <>
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative ">
            <div className="pulse w-36 h-36 animate-pulse rounded-3xl translate-x-120 translate-y-20 bg-brand-primary"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Team meeting"
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj336AIHEyyEMxpte31ZT-vSk3_Wl0TUz7zgDtx78VAah9mH0a_Q3Z_hTQ03bUZ4uPLCJGtPJD36hp7sYicN-x3BhjgaYg51zhD59bQLfMO9L0vZ8N-jEA82r_NlVp-wwdnXwSJhpZfN_8thuJcDCgLF1NMqG5l_MHa41-MaP32lThcCo5JB6stEcAg86HerH0bxEQMW2uBZPl8GDx7PIhkgkmqqRFXJdmQLeQRmZ4MuI5t7c1TrFJ07DU1xL6lY-qzTFkiqytUo0Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="text-3xl font-bold">10M+</p>
                  <p className="text-sm font-medium text-gray-300 mb-5">
                    Matches made globally
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 px-8 py-6 glass-card rounded-xl shadow-xl z-20">
              <div className="flex items-center gap-3 bg-amber-50 rounded-full px-1 py-1 my-2">
                <div className="size-10 bg-brand-secondary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">
                    <FaRegCircleCheck />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Enterprise Grade</p>
                  <p className="text-xs text-brand-gray-500">
                    Security &amp; Trust
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Rewiring how the world{" "}
              <span className="text-brand-secondary italic">connects</span> and
              works.
            </h2>
            <p className="text-lg text-brand-gray-600 dark:text-brand-gray-400 font-medium">
              We're not just a job board. We are an ecosystem that empowers
              professionals to find purpose and companies to build exceptional
              teams through data-driven matching and human-centric design.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-gray-700 dark:text-brand-gray-300 font-semibold">
                <span className="material-symbols-outlined text-brand-secondary">
                  <FaRegCircleCheck />
                </span>
                AI-Powered Candidate Ranking
              </li>
              <li className="flex items-center gap-3 text-brand-gray-700 dark:text-brand-gray-300 font-semibold">
                <span className="material-symbols-outlined text-brand-secondary">
                  <FaRegCircleCheck />
                </span>
                End-to-End Recruitment Workflow
              </li>
              <li className="flex items-center gap-3 text-brand-gray-700 dark:text-brand-gray-300 font-semibold">
                <span className="material-symbols-outlined text-brand-secondary">
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
