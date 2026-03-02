import React from "react";
import { RiLockStarFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SiSpringsecurity } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const Unauthorised = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <main class="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div class="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]"></div>
            <div class="glass-panel max-w-2xl w-full p-8 md:p-16 rounded-xl shadow-2xl flex flex-col items-center text-center relative z-10">
              <div class="mb-8 relative">
                <div class="size-32 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center relative">
                  <span class="material-symbols-outlined text-6xl text-primary">
                    <RiLockStarFill />
                  </span>
                  <div class="absolute -top-2 -right-2 size-10 bg-brand-secondary rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900">
                    <span class="material-symbols-outlined text-white text-lg">
                      <MdSecurity />
                    </span>
                  </div>
                </div>
                <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  Error 403
                </div>
              </div>
              <h1 class="text-4xl md:text-5xl animate-pulse font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                Access Denied
              </h1>
              <p class="text-slate-600 dark:text-slate-400 text-lg max-w-md mb-10 leading-relaxed">
                It seems you don't have the required permissions to view this
                workspace. This area is reserved for verified recruiters and
                authorized talent.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button class="flex items-center justify-center gap-2 bg-brand-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/30 min-w-[180px]">
                  <span class="material-symbols-outlined">
                    <LuLogIn />
                  </span>
                  <Link to="/login">Sign In</Link>
                </button>
                <button
                  onClick={() => navigate(-1)}
                  class="flex items-center justify-center gap-2 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-bold transition-all min-w-[180px]"
                >
                  <span class="material-symbols-outlined">
                    <IoMdArrowRoundBack />
                  </span>
                  <span>Go Back</span>
                </button>
              </div>
              <div class="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 w-full">
                <div class="flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">
                      <MdSecurity />
                    </span>
                    <span class="text-xs font-semibold uppercase tracking-wider">
                      Secure Access
                    </span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">
                      <SiSpringsecurity />
                    </span>
                    <span class="text-xs font-semibold uppercase tracking-wider">
                      Policy Protected
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 text-slate-400 dark:text-slate-600 text-sm flex gap-4">
              <a
                class="hover:text-primary underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </a>
              <span>•</span>
              <a
                class="hover:text-primary underline underline-offset-4"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </main>
          <footer class="p-6 text-center border-t border-slate-100 dark:border-slate-900">
            <p class="text-slate-400 dark:text-slate-600 text-xs font-medium">
              © 2024 JobPortal Inc. All rights reserved. Your security is our
              priority.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Unauthorised;
