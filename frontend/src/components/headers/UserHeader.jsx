import React from "react";
import { FaBell } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="h-20 glass border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0 z-10">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary">
            <IoIosSearch />
          </span>

          <input
            type="text"
            placeholder="Search for jobs, companies, or keywords..."
            className="w-full pl-12 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-brand-primary/20 outline-none"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
          <span className="material-symbols-outlined">
            <FaBell />
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full ring-2 ring-white dark:ring-slate-900"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800"></div>

        {/* User */}

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold">{user?.name || "Guest"}</p>
            <p className="text-xs text-slate-500">
              {user?.heading || "UI/UX desiner "}
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-brand-primary/20 border-2 border-brand-primary overflow-hidden">
            <img
              src={user?.pic || "https://i.pravatar.cc/150"}
              className="w-10 h-10 rounded-full object-cover"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
