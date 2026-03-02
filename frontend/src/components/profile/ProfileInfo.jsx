import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileInfo() {
  const navigate = useNavigate();
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Personal Info */}
      <div className="glass-card bg-[#f1f6f6] rounded-3xl p-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Personal Information
            </h3>
            <p className="text-sm text-gray-accent">
              Update your name and career headline
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 bg-transparent text-black p-6 rounded-2xl">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">First Name</label>
            <input
              type="text"
              defaultValue="kinza"
              className="rounded-full px-4 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">Last Name</label>
            <input
              type="text"
              placeholder="shahzadi"
              className="rounded-full px-4 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">Email</label>
            <input
              type="email"
              placeholder="kinza@gmail.com"
              className="rounded-full px-4 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">
              Contact info
            </label>
            <input
              type="number"
              placeholder="+9288888799"
              className="rounded-full px-4 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          {/* Professional Headline */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium text-black">
              Professional Headline
            </label>
            <input
              type="text"
              placeholder="Senior Product Designer"
              className="rounded-full px-4 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="glass-card bg-[#f1f6f6] rounded-3xl p-8">
        <h3 className="text-xl font-bold ">Professional Summary</h3>
        <h5 className="text-md text-gray-500 mb-4">
          Brief overview of your Skills nas professional summery
        </h5>

        <h3 className="text-xl font-bold ">About You</h3>
        <textarea
          className="input-field w-full min-h-[150px] rounded-3xl bg-[#FFFFFF] p-3 "
          placeholder="A highly motivated and creative Senior Product Designer..."
        />

        <div className="flex justify-end gap-4 mt-6 ">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-full border-brand-primary border-[0.5px] hover:bg-brand-primary/10  text-slate-500 font-bold "
          >
            Discard Changes
          </button>

          <button className="px-10 py-3 rounded-full bg-brand-primary text-white font-bold shadow-glow-orange hover:shadow-xl">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, defaultValue }) {
  return (
    <div className="space-y-2 bg-[#FFFFFF] p-2.5 rounded-3xl">
      <label className="text-xs font-bold text-slate-500 uppercase">
        {label}
      </label>

      <input defaultValue={defaultValue} className="input-field" />
    </div>
  );
}
