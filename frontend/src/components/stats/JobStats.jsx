import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobStats() {
  return (
    <>
      <div className="main flex flex-col">
        <div className="flex flex-wrap justify-between py-5 gap-6 items-end">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-navy dark:text-white">
              Job Listings
            </h1>
            <p className="text-sm font-medium text-neutral-gray dark:text-gray-400">
              Manage, track, and moderate all employment opportunities.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-lg h-12 px-6 bg-brand-primary/80 text-white text-sm font-bold shadow-soft hover:bg-brand-primary hover:shadow-orange-glow transition-all duration-300">
            <span className="material-symbols-outlined">
              <FaPlus />
            </span>
            <span className="">
              <Link to="/postjob"> Post New Job</Link>
            </span>
          </button>
        </div>
        {/* stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Jobs */}
          <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="p-2 bg-brand-secondary/10 text-brand-secondary rounded-lg material-symbols-outlined">
                <FaRegCheckCircle />
              </span>
              <span className="text-xs font-bold bg-brand-secondary/10 text-brand-secondary px-2 py-0.5 rounded-full">
                +12%
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy dark:text-white">
                1,482
              </p>
              <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
                Total Jobs
              </p>
            </div>
          </div>

          {/* Remote Jobs */}
          <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-gray-900  shadow-xl">
            <div className="flex items-center justify-between">
              <span className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg material-symbols-outlined">
                <IoHome />
              </span>
              <span className="text-xs font-bold bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full">
                8 Pending
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy dark:text-white">45</p>
              <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
                Remote Jobs
              </p>
            </div>
          </div>

          {/* Onsite Jobs */}
          <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-gray-900  shadow-xl">
            <div className="flex items-center justify-between">
              <span className="p-2 bg-blue-100 text-blue-600 rounded-lg material-symbols-outlined">
                <BsFillBuildingsFill />
              </span>
              <span className="text-xs font-bold bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full">
                Urgent Hiring
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy dark:text-white">
                12,840
              </p>
              <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">
                Onsite Jobs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
