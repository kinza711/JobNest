import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
  FiUpload,
  FiSend,
  FiInfo,
} from "react-icons/fi";

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
    relocate: false,
    newsletter: true,
    availability: "Immediate",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", form);
    alert("Application Submitted Successfully!");
  };

  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Apply for <span className="text-brand-primary"> Job</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Submit your application details below.
            </p>
          </div>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-xl h-11 px-8 bg-brand-primary text-white text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FiSend />
            Submit Application
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FiUser className="text-brand-primary" />
                Personal Information
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl p-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full pl-10 rounded-xl p-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+123 456 7890"
                        className="w-full pl-10 rounded-xl p-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="New York, USA"
                      className="w-full pl-10 rounded-xl p-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FiFileText className="text-brand-primary" />
                Documents & Details
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="link"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={handleChange}
                    placeholder="https://yourportfolio.com"
                    className="w-full rounded-xl p-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your cover letter..."
                    className="w-full rounded-xl  border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Upload Resume
                  </label>
                  <div className="flex items-center gap-3">
                    <FiUpload className="text-brand-primary" />
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      className="text-sm p-5"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side Settings */}
          <div className="space-y-6">
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FiInfo className="text-brand-primary" />
                Preferences
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    Willing to Relocate
                  </span>
                  <input
                    type="checkbox"
                    name="relocate"
                    checked={form.relocate}
                    onChange={handleChange}
                    className="h-5 w-5 text-brand-primary"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    Subscribe to Newsletter
                  </span>
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={form.newsletter}
                    onChange={handleChange}
                    className="h-5 w-5 text-brand-primary"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <label className="block text-sm font-semibold mb-2">
                    Availability
                  </label>
                  {["Immediate", "1 Month", "3 Months"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer mb-2"
                    >
                      <input
                        type="radio"
                        name="availability"
                        value={option}
                        checked={form.availability === option}
                        onChange={handleChange}
                        className="h-4 w-4 text-brand-primary"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobApplicationForm;
