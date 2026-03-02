import React from "react";
import PolicyImg from "../../assets/policyimg.png";
import { FaDatabase } from "react-icons/fa";
import { FaCookieBite } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Sidebar / Image Section */}
        <aside className="lg:w-1/3 flex flex-col gap-8">
          <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] bg-slate-200 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
            <img
              src={PolicyImg}
              alt="Privacy Illustration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <span className="inline-block px-3 py-1 bg-brand-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                Security First
              </span>
              <h2 className="text-4xl font-black text-white leading-tight">
                Privacy <br />
                is our <br />
                <span className="text-brand-primary">Priority.</span>
              </h2>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed max-w-xs">
                We use military-grade encryption and transparent data practices
                to keep your professional journey safe.
              </p>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6 border-l-4 border-brand-primary shadow-sm">
            <p className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
              Effective Date
            </p>
            <p className="text-lg font-bold">October 24, 2023</p>
            <div className="mt-4 h-px bg-slate-200 dark:bg-slate-700 w-full"></div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Our policy is updated regularly to stay compliant with global data
              protection regulations (GDPR, CCPA).
            </p>
          </div>
        </aside>

        {/* Right Content */}
        <section className="lg:w-2/3 space-y-12">
          <header>
            <h3 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2">
              Legal Transparency
            </h3>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              At JobPortal, we believe in radical transparency. This document
              explains how we handle your data, why we collect it, and the
              rights you have over your information.
            </p>
          </header>

          {/* Policy Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-white text-3xl">
                  <FaDatabase />
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3">Data Collection</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We collect professional information including your resume,
                contact details, and career preferences to match you with the
                best opportunities.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center mb-6 group-hover:bg-brand-secondary transition-colors">
                <span className="material-symbols-outlined text-brand-secondary group-hover:text-white text-3xl">
                  <FaCookieBite />
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3">Cookies Policy</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Small data fragments help us remember your preferences and
                provide a seamless, personalized browsing experience across
                devices.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <span className="material-symbols-outlined text-blue-500 group-hover:text-white text-3xl">
                  <MdOutlineSecurity />
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3">User Rights</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                You have the right to access, rectify, or delete your personal
                data at any time through your dashboard settings.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <span className="material-symbols-outlined text-purple-500 group-hover:text-white text-3xl">
                  <IoMdShare />
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3">Third Parties</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We only share your information with verified employers you
                explicitly apply to. We never sell your personal data to
                brokers.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div class="prose prose-slate dark:prose-invert max-w-none space-y-8">
        <div>
          <h2 class="text-2xl font-black flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center text-sm">
              01
            </span>
            Information We Collect
          </h2>
          <p class="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            When you register for an account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number. If you contact us directly, we
            may receive additional information about you such as your name,
            email address, phone number, the contents of the message and/or
            attachments you may send us, and any other information you may
            choose to provide.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-black flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center text-sm">
              02
            </span>
            How we use your information
          </h2>
          <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
            <li class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700">
              <span class="material-symbols-outlined text-brand-secondary">
                <FaCheckCircle />
              </span>
              <span class="text-sm">
                Provide, operate, and maintain our website
              </span>
            </li>
            <li class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700">
              <span class="material-symbols-outlined text-brand-secondary">
                <FaCheckCircle />
              </span>
              <span class="text-sm">
                Improve, personalize, and expand our website
              </span>
            </li>
            <li class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700">
              <span class="material-symbols-outlined text-brand-secondary">
                <FaCheckCircle />
              </span>
              <span class="text-sm">
                Understand and analyze how you use our website
              </span>
            </li>
            <li class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700">
              <span class="material-symbols-outlined text-brand-secondary">
                <FaCheckCircle />
              </span>
              <span class="text-sm">
                Develop new products, services, features, and functionality
              </span>
            </li>
          </ul>
        </div>
        <div class="bg-brand-primary/5 rounded-3xl p-8 border border-brand-primary/20 relative overflow-hidden">
          <span class="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-brand-primary/10 rotate-12">
            <LuMessageCircleQuestion />
          </span>
          <h3 class="text-2xl font-bold mb-4">Have Questions?</h3>
          <p class="text-slate-600 dark:text-slate-400 mb-6">
            Our dedicated privacy team is here to help you understand your data
            rights and our commitment to your security.
          </p>
          <button class="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:shadow-brand-primary/30 transition-all flex items-center gap-2">
            Contact Privacy Officer
            <span class="material-symbols-outlined text-sm">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
