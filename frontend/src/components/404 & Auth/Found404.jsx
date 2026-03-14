import React from "react";
import { FaSearchengin } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { BiSolidBellRing } from "react-icons/bi";
import { IoBriefcaseSharp } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";

const Found404 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center overflow-hidden">
      <div class="fixed inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-[-10%] left-[-5%] w-96 h-96 bg-brand-primary rounded-full blur-[100px] floating-1"></div>
        <div class="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-secondary rounded-full blur-[120px] floating-2"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 dark:opacity-10">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                height="40"
                id="grid"
                patternunits="userSpaceOnUse"
                width="40"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
      </div>
      {/* <!-- Main Content Container --> */}
      <main class="relative z-10 w-full max-w-4xl px-6 text-center">
        {/* <!-- Illustration Area --> */}
        <div class="relative mb-8">
          <div class="flex justify-center items-center gap-4">
            {/* <!-- Large 404 with unique styling --> */}
            <span class="text-[10rem] md:text-[16rem] font-extrabold leading-none tracking-tighter text-slate-900 dark:text-white flex select-none">
              4
              <div class="relative flex items-center px-4">
                <div class="w-24 h-24 md:w-40 md:h-40 bg-brand-primary rounded-xl  rotate-12 shadow-2xl shadow-brand-primary flex items-center justify-center floating-1">
                  <span class="material-icons text-white text-5xl md:text-7xl">
                    <FaSearchengin />
                  </span>
                </div>
                <div class="absolute -top-4 -right-4 w-12 h-12 bg-brand-green rounded-full shadow-lg floating-2"></div>
              </div>
              4
            </span>
          </div>
          {/* <!-- Abstract Shapes Overlay --> */}
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center pointer-events-none">
            <div class="w-4 h-4 rounded-full bg-brand-secondary absolute top-20 left-1/4 animate-ping"></div>
            <div class="w-3 h-3 rounded-full bg-brand-primary absolute bottom-20 right-1/4 animate-bounce"></div>
          </div>
        </div>
        {/* <!-- Text Content --> */}
        <div class="max-w-xl mx-auto space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Job Opportunity <span class="text-brand-primary">Not Found</span>
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            The position you're looking for might have been filled, or the link
            has taken a career break. Let's get your job search back on track.
          </p>
          {/* <!-- CTA Section --> */}
          <div class="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button class="group relative px-8 py-4 bg-brand-primary hover:bg-brand-primary text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-brand-primary hover:shadow-brand-primary hover:scale-105 flex items-center gap-2">
              <span class="material-icons text-xl group-hover:-translate-x-1 transition-transform">
                <FaArrowLeft />
              </span>
              <Link to="/">Back to Home</Link>
            </button>
            <Link
              to="/jobs"
              class="px-8 py-4 glass text-slate-900 dark:text-slate-100 font-semibold rounded-full hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 border border-brand-primary dark:border-slate-700 flex items-center gap-2"
            >
              <span class="material-icons text-xl text-brand-secondary">
                <FaSearchengin />
              </span>
              Browse Jobs
            </Link>
          </div>
        </div>
        {/* <!-- Secondary Info / Links --> */}
        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div class="glass p-6 rounded-3xl border bg-[#ffffff] border-white/20">
            <div class="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center mb-4">
              <span class="material-icons text-white text-3xl">
                <MdLiveHelp />
              </span>
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">
              Need Help?
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Visit our support center for guidance on navigating the portal.
            </p>
          </div>
          <div class="glass p-6 rounded-3xl border bg-[#ffffff] border-white/20">
            <div class="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center mb-4">
              <span class="material-icons text-white text-3xl">
                <BiSolidBellRing />
              </span>
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">
              Job Alerts
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Sign up to get notified when new matching roles appear.
            </p>
          </div>
          <div class="glass p-10 rounded-3xl border bg-[#ffffff] border-white/20">
            <div class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
              <span class="material-icons text-slate-600 dark:text-slate-300 text-3xl">
                <IoBriefcaseSharp />
              </span>
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">
              Company Directory
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Explore top companies hiring right now in your area.
            </p>
          </div>
        </div>
        {/* <!-- Footer Branding --> */}
        <footer class="mt-16 pb-8">
          <div class="flex items-center justify-center gap-2 opacity-50">
            <div class="w-6 h-6 bg-brand-primary rounded-md"></div>
            <span class="font-bold uppercase tracking-widest text-sm">
              CareerPortal.
            </span>
          </div>
        </footer>
      </main>
      {/* <!-- Background Image / Texture --> */}
      <div class="fixed inset-0 -z-10 opacity-20">
        <img
          class="w-full h-full object-cover filter grayscale"
          data-alt="Modern minimalist office interior with glass walls"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiGFePAC4qI88akHB_apMD9r-aDrD47b5hOrqWbXJVWpPkqZsPn-dpXUOypycIZm_cf4HzIZqrGbLy753lEvyZ5ed6saUZ2Usf5Gw2WZkPV8pyzHna9wqRKC53IpJvVIi2tGRXtd0FqIQwGhlcKARglx_cAXpI8WCLQdBc2bELEcPBiExIQvVzIhY-TL_CeF2xHxZ2ww-iXsQDk5Yf771wJocyudoZk1O21GvSqHlog0hadzyyyf1pM-Q24zZpdPgAgAMF1Fd5Q_sp"
        />
      </div>
    </div>
  );
};

export default Found404;
