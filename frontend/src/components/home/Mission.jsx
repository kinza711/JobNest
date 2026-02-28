import React from "react";
import { MdOutlinePsychology, MdOutlineSecurity } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";

const Mission = () => {
  return (
    <>
      <section class="py-24 max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-brand-primary font-bold uppercase tracking-widest text-sm">
            Why Us
          </span>
          <h2 class="text-4xl font-bold mt-4">
            Superior Technology for Better Hiring
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="p-10 rounded-3xl bg-white dark:bg-brand-gray-800 shadow-soft border border-brand-gray-100 dark:border-brand-gray-700 hover:border-brand-primary transition-all">
            <div class="size-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8">
              <span class="material-symbols-outlined text-brand-primary text-4xl">
                <MdOutlinePsychology />
              </span>
            </div>
            <h3 class="text-xl font-bold mb-4">Neural Matching</h3>
            <p class="text-brand-gray-500 dark:text-brand-gray-400 font-medium">
              Our deep-learning engine understands skills beyond keywords to
              find the cultural and technical fit.
            </p>
          </div>
          <div class="p-10 rounded-3xl bg-white dark:bg-brand-gray-800 shadow-soft border border-brand-gray-100 dark:border-brand-gray-700 hover:border-brand-secondary transition-all">
            <div class="size-16 rounded-2xl bg-brand-secondary/10 flex items-center justify-center mb-8">
              <span class="material-symbols-outlined text-brand-secondary text-4xl">
                <MdOutlineSecurity />
              </span>
            </div>
            <h3 class="text-xl font-bold mb-4">Verified Ecosystem</h3>
            <p class="text-brand-gray-500 dark:text-brand-gray-400 font-medium">
              Every company and job posting undergoes a 7-step verification
              process to ensure zero spam.
            </p>
          </div>
          <div class="p-10 rounded-3xl bg-white dark:bg-brand-gray-800 shadow-soft border border-brand-gray-100 dark:border-brand-gray-700 hover:border-brand-primary transition-all">
            <div class="size-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8">
              <span class="material-symbols-outlined text-brand-primary text-4xl">
                <HiOutlineBolt />
              </span>
            </div>
            <h3 class="text-xl font-bold mb-4">Real-time Insights</h3>
            <p class="text-brand-gray-500 dark:text-brand-gray-400 font-medium">
              Get instant feedback on your applications and market salary trends
              with our dashboard.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
