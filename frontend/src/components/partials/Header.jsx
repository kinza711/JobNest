import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="items-center justify-center flex sticky top-0 z-50 py-3 dark:bg-slate-900 ">
      <header className="flex items-center bg-white shadow-md shadow-brand-primary/15 w-[80%] rounded-full justify-between px-4 sm:px-6 lg:px-20 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            <Link to="/">
              Job<span className="text-brand-primary">Nest</span>
            </Link>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1  justify-center gap-8 text-slate-700 dark:text-slate-300 font-medium">
          <Link
            to="/jobs"
            className="hover:text-brand-primary transition-colors"
          >
            Find Jobs
          </Link>
          <Link to="/" className="hover:text-brand-primary transition-colors">
            Why Us
          </Link>
          <Link
            to="/policy"
            className="hover:text-brand-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Right Buttons & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/login"
              className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand-primary px-3 py-1 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-brand-primary hover:bg-orange-600 text-white rounded-full text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl text-brand-primary font-extrabold p-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 shadow-lg transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Job<span className="text-brand-primary">Nest</span>
              </Link>
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-brand-primary"
            >
              <HiX />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-6 text-left text-slate-700 dark:text-slate-300 font-medium">
            <Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)}>
              Find Jobs
            </Link>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Why Us
            </Link>
            <Link to="/policy" onClick={() => setIsMobileMenuOpen(false)}>
              Privacy Policy
            </Link>
            <Link
              to="/login"
              className="text-sm font-bold hover:text-brand-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-brand-primary hover:bg-orange-600 text-white rounded-full text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Post a Job
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-brand-primary/10 bg-opacity-30 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </header>
    </div>
  );
}
