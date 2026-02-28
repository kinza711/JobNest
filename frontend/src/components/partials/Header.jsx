import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 rounded-full bg-[#ffffff] dark:bg-brand-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg sticky top-4 z-50">
      <div className="flex items-center gap-2">
        <div className="size-8 text-brand-primary">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tight">
          Job<span className="text-brand-primary">Portal</span>
        </h2>
      </div>

      <nav className="hidden lg:flex flex-1 justify-center gap-10">
        {["Find Jobs", "Companies", "Why Us", "Resources"].map((link) => (
          <a
            key={link}
            className="text-sm font-semibold text-brand-gray-600 dark:text-brand-gray-300 hover:text-brand-primary transition-colors"
            href="#"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-sm font-bold text-brand-gray-700 dark:text-brand-gray-200 hover:text-brand-primary px-4 py-2 transition-colors">
          Sign In
        </button>
        <button className="px-6 py-2.5 bg-brand-primary hover:bg-orange-600 text-white rounded-full text-sm font-bold shadow-glow-orange transition-all hover:scale-105 active:scale-95">
          Post a Job
        </button>
      </div>
    </header>
  );
}
