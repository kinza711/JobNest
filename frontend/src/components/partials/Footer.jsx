import React from "react";
import Logo from "../../assets/jobnest.png";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 py-10 border-t border-brand-gray-200 dark:border-brand-gray-800 bg-brand-gray-50 dark:bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* <!-- Logo & Description --> */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center mb-6">
              {/* <div className="text-brand-primary w-8 h-8">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>
              </div> */}
              <div className="cirlcel w-24 h-24 rounded-full">
                <img src={Logo} alt="logo" className="h-full w-full" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Job<span className="text-brand-primary">Nest</span>
              </h2>
            </div>
            <p className="text-brand-gray-500 dark:text-brand-gray-400 font-medium max-w-xs leading-relaxed">
              The premier destination for elite talent and forward-thinking
              companies to meet and grow.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="size-10 rounded-full bg-brand-gray-100 dark:bg-brand-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="size-10 rounded-full bg-brand-gray-100 dark:bg-brand-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="size-10 rounded-full bg-brand-gray-100 dark:bg-brand-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- Product Links --> */}
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-gray-500 dark:text-brand-gray-400">
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Job Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Company Profiles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Salaries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Expert Advice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Employer</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-gray-500 dark:text-brand-gray-400">
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Hiring Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Employer Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Support Links --> */}
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-gray-500 dark:text-brand-gray-400">
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-brand-gray-400 mt-10">
          &copy; 2026 JobNest. All rights reserved by Kinza.
        </p>
      </footer>
    </>
  );
};

export default Footer;
