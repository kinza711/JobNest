import React from "react";

const Steps = () => {
  return (
    <>
      <section className="py-10 bg-[#F7F9F9] dark:bg-brand-gray-800/20 rounded-[3rem] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Your path to success <br /> made{" "}
              <span className="text-brand-primary">effortless.</span>
            </h2>
            <p className="text-brand-gray-500 dark:text-brand-gray-400 max-w-2xl font-medium">
              Follow our streamlined 3-step process to land your next big career
              opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8">
              <div className="size-20 rounded-full bg-white dark:bg-brand-gray-800 shadow-xl flex items-center justify-center mb-8 border border-brand-gray-100 dark:border-brand-gray-700 text-brand-primary font-black text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Create Your Profile</h3>
              <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium leading-relaxed">
                Build a rich, interactive resume that showcases your
                achievements, skills, and portfolio projects.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <div className="size-20 rounded-full bg-white dark:bg-brand-gray-800 shadow-xl flex items-center justify-center mb-8 border border-brand-gray-100 dark:border-brand-gray-700 text-brand-secondary font-black text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Get AI Matches</h3>
              <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium leading-relaxed">
                Relax while our algorithms find positions that align with your
                career goals and preferences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <div className="size-20 rounded-full bg-white dark:bg-brand-gray-800 shadow-xl flex items-center justify-center mb-8 border border-brand-gray-100 dark:border-brand-gray-700 text-brand-primary font-black text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Interview &amp; Hire</h3>
              <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm font-medium leading-relaxed">
                Connect directly with decision-makers via our integrated
                messaging and video platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
