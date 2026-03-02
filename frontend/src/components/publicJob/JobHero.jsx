import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

const JobHero = () => {
  return (
    <section className="relative rounded-3xl overflow-hidden mb-12">
      
      {/* Updated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/25 via-brand-secondary/10 to-success/20 z-0"></div>

      <div className="relative z-10 bg-brand-primary/5 dark:bg-brand-secondary/10 backdrop-blur-sm border border-brand-primary/20 p-8 md:p-16 flex flex-col items-center text-center">
        
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight text-slate-900 dark:text-white">
          Your next <span className="text-brand-primary">career chapter</span> starts here.
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mb-10">
          Connect with industry-leading companies and explore thousands of
          high-paying opportunities tailored just for you.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-3xl bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-2xl shadow-brand-primary/10 flex flex-col md:flex-row gap-2">
          
          <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700">
            <FiSearch className="text-brand-primary" />
            <input
              className="w-full bg-transparent border-none focus:ring-0 placeholder:text-slate-400 text-slate-900 dark:text-white"
              placeholder="Job title or keywords"
              type="text"
            />
          </div>

          <div className="flex-1 flex items-center px-4 gap-3">
            <FiMapPin className="text-brand-secondary" />
            <input
              className="w-full bg-transparent border-none focus:ring-0 placeholder:text-slate-400 text-slate-900 dark:text-white"
              placeholder="City or remote"
              type="text"
            />
          </div>

          <button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
            Find Jobs
          </button>

        </div>
      </div>
    </section>
  );
};

export default JobHero;