import React, { useState } from "react";
import {
  MdDescription,
  MdSubject,
  MdTune,
  MdLocationOn,
  MdPayments,
  MdInfo,
} from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import api from "../../services/api";
import Back from "../buttons/Back";

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    disc: "",
    keys: "",
    company: "",
    requirements: "",
    category: "Design",
    location: "",
    salary: "",
    jobType: "Full-time",
    companySize: "",
    industry: "",
    remote: false,
    onsite: true,
    urgent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/post", formData);

      console.log("Job Posted:", res);
      alert("Job Posted Successfully!");
      setFormData({
        title: "",
        disc: "",
        keys: "",
        company: "",
        requirements: "",
        category: "Design",
        location: "",
        salary: "",
        jobType: "Full-time",
        companySize: "",
        industry: "",
        remote: false,
        onsite: true,
        urgent: false,
      });
    } catch (err) {
      alert("job not posted", err);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">
              Post a New Job
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              Create a high-impact job listing for your organization.
            </p>
          </div>
          <div className="flex gap-3">
            <Back />
            <button
              type="submit"
              className="flex items-center justify-center rounded-xl h-11 px-8 bg-brand-primary text-white text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Publish Job
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Core Info */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <MdDescription className="text-brand-primary text-xl" />
                Core Information
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Senior Product Designer"
                    className="w-full rounded-xl border-slate-200 py-2 px-3 bg-slate-100 dark:border-slate-700  dark:bg-slate-800 focus:border-brand-primary focus:ring-brand-primary text-slate-900 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Brand Name Inc."
                      className="w-full rounded-xl py-2 px-3 bg-slate-100 border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-brand-primary focus:ring-brand-primary text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full rounded-xl py-2 px-3 bg-slate-100 border-slate-200 dark:border-slate-700  dark:bg-slate-800 focus:border-brand-primary focus:ring-brand-primary text-slate-900 dark:text-white"
                    >
                      <option>Web Developer</option>
                      <option>AI/ML Engineer</option>
                      <option>UI/UX Designer</option>
                      <option>Software Engineering</option>
                      <option>Marketing</option>
                      <option>Customer Support</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MdLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="San Francisco, CA"
                        className="w-full pl-10 rounded-xl py-2 px-3 bg-slate-100 border-slate-200 dark:border-slate-700  dark:bg-slate-800 focus:border-brand-primary focus:ring-brand-primary text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Salary Range
                    </label>
                    <div className="relative">
                      <MdPayments className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="$120k - $160k"
                        className="w-full pl-10 py-2 px-3  rounded-xl border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-brand-primary focus:ring-brand-primary text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* company size nad indusrtry type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Company Size
                    </label>
                    <div className="relative">
                      <FaUsersBetweenLines className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        placeholder="20 - 50 Empolyees"
                        className="w-full pl-10 rounded-xl py-2 px-3 bg-slate-100 border-slate-200 dark:border-slate-700  dark:bg-slate-800 focus:border-brand-primary focus:ring-brand-primary text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Industry Type
                    </label>
                    <div className="relative">
                      <CiGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        placeholder="Software company"
                        className="w-full pl-10 py-2 px-3  rounded-xl border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-brand-primary focus:ring-brand-primary text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Details */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <MdSubject className="text-brand-primary text-xl" />
                Content Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Job Description
                  </label>
                  <textarea
                    name="disc"
                    value={formData.disc}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Describe the role, responsibilities, and team culture..."
                    className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white"
                  />
                </div>
                {/* key responsibilites */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Key Responsibilities
                  </label>
                  <textarea
                    name="keys"
                    value={formData.keys}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Lead end-to-end design process from research to high-fidelity prototypes...."
                    className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="4"
                    placeholder="List technical skills, years of experience, and qualifications..."
                    className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <MdTune className="text-brand-primary text-xl" />
                Settings
              </h3>
              {/* Settings Checkboxes & Radio */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Remote Friendly
                    </span>
                    <span className="text-xs text-slate-500">
                      Allow candidates to work from home
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    name="remote"
                    checked={formData.remote}
                    onChange={handleChange}
                    className="h-5 w-5 text-brand-primary"
                  />
                </div>
                {/* onsite jobs */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Onsite
                    </span>
                    <span className="text-xs text-slate-500">
                      Allow candidates to work from Office
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    name="onsite"
                    checked={formData.onsite}
                    onChange={handleChange}
                    className="h-5 w-5 text-brand-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Urgent Hiring
                    </span>
                    <span className="text-xs text-slate-500">
                      Mark listing with an urgent badge
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    name="urgent"
                    checked={formData.urgent}
                    onChange={handleChange}
                    className="h-5 w-5 text-brand-secondary"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Job Type
                  </label>
                  <div className="space-y-2">
                    {["Full-time", "Contract", "Part-time"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="jobType"
                          value={type}
                          checked={formData.jobType === type}
                          onChange={handleChange}
                          className="text-brand-primary focus:ring-brand-primary h-4 w-4 border-slate-300"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Info Box */}
            <div className="bg-brand-primary/5 dark:bg-brand-primary/10 p-6 rounded-xl border border-brand-primary/20">
              <div className="flex items-start justify-start gap-3">
                <MdInfo className="text-brand-primary text-7xl" />
                <div>
                  <p className="text-sm font-bold text-brand-primary mb-1">
                    Visibility Boost
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Urgent listings typically receive 40% more applications
                    within the first 48 hours. Consider enabling the boost for
                    critical roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default JobPostForm;
