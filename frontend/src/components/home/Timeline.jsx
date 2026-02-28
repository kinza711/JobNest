import React from "react";

const Timeline = () => {
  return (
    <>
      <section class="py-24 bg-brand-gray-900 text-white rounded-[3rem] px-4 my-12 mx-4 overflow-hidden relative">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-20">
            <span class="text-brand-primary font-bold uppercase tracking-widest text-sm">
              Timeline
            </span>
            <h2 class="text-4xl font-bold mt-4">The Evolution of JobPortal</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div class="hidden md:block absolute top-10 left-0 w-full h-px bg-white/10"></div>
            <div class="relative pt-20">
              <div class="size-6 rounded-full bg-brand-primary shadow-glow-orange border-4 border-brand-gray-900 absolute top-7 left-0 md:left-1/2 -translate-x-1/2"></div>
              <h3 class="text-2xl font-bold mb-3">2020: The Foundation</h3>
              <p class="text-brand-gray-400 font-medium">
                Launched as a simple matchmaking tool for remote startups,
                focusing on developer roles.
              </p>
            </div>
            <div class="relative pt-20">
              <div class="size-6 rounded-full bg-brand-secondary shadow-glow-green border-4 border-brand-gray-900 absolute top-7 left-0 md:left-1/2 -translate-x-1/2"></div>
              <h3 class="text-2xl font-bold mb-3">2022: Global Scaling</h3>
              <p class="text-brand-gray-400 font-medium">
                Expanded to 50+ countries and integrated AI filtering to process
                1M+ applications monthly.
              </p>
            </div>
            <div class="relative pt-20">
              <div class="size-6 rounded-full bg-white border-4 border-brand-gray-900 absolute top-7 left-0 md:left-1/2 -translate-x-1/2"></div>
              <h3 class="text-2xl font-bold mb-3">2024: Enterprise Hub</h3>
              <p class="text-brand-gray-400 font-medium">
                Reimagined as a full-cycle enterprise platform with three
                distinct user ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
