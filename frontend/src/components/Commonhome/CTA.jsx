import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-brand-primary p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg
              className="h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M0 100 Q 25 0 50 100 T 100 0"
                fill="transparent"
                stroke="white"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
          <div className="relative z-10 text-center flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to architect <br /> your future?
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl">
              Join over 2 million professionals who have accelerated their
              careers through JobPortal. Signing up takes less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <button className="px-10 py-5 bg-white text-brand-primary rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all">
                <Link to="/register">Create Candidate Profile</Link>
              </button>
              <button className="px-10 py-5 bg-brand-gray-900 text-white rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all">
                <Link to="/login">Join as Employer</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
