import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <div className="main w-full sticky   top-4 z-50 flex justify-center">
        <header className="flex  w-[80%] shadow-lg items-center justify-between px-6 py-4 rounded-full bg-[#ffffff] ">
          <div className="flex items-center gap-2">
            <div className="size-8 text-brand-primary">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">
              {/* <img src={Logo} alt="" /> */}
              Job<span className="text-brand-primary">Nest</span>
            </h2>
          </div>

          <nav className="hidden lg:flex flex-1 justify-center gap-10">
            <Link to="/">Find Jobs</Link>
            <Link to="/">Companies</Link>
            <Link to="/">Why Us</Link>
            <Link to="/policy">Privacy Policy</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-brand-gray-700 dark:text-brand-gray-200 hover:text-brand-primary px-4 py-2 transition-colors">
              <Link to="/login"> Sign In</Link>
            </button>
            <button className="px-6 py-2.5 bg-brand-primary hover:bg-orange-600 text-white rounded-full text-sm font-bold shadow-glow-orange transition-all hover:scale-105 active:scale-95">
              Post a Job
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
