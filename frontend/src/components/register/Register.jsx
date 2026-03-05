import React, { useState } from "react";

import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "HR",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", formData);

      alert(res.data.message); // show backend message

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "user not registed"); // show backend message
    }
  };

  return (
    <div className="flex w-full bg-background-light dark:bg-brand-gray-700">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-brand-gray-800">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzl83NYkJoxgDsrB9sr_ROqbnz5h2fo04cuMbgpRsZ6zolmdl1GcDr66O6aDi5M38LePtZhh_T7TniCWtP7uynxVVdVxD-h8k5IlfcPveoIV8euFZN3Wg-qsztyP_NMHw41aO-GXS_thwm7QzGHtuibDwD5BS-44sU3tZdvR8bUGKDcGVBOS4CeQsSn2WzEWkEW3MgV-obo6RywLnCIRtUXbEokfuwZQJhk69Yr53PnkEw1Nvxhqg-DbpSp2OrWgM8PPzipHx9kOxT")',
          }}
          alt="Diverse professionals collaborating in a modern office"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/80 via-neutral-dark/40 to-primary/30 z-10"></div>

        <div className="relative z-20 flex flex-col justify-between p-16 h-full w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-primary p-2 rounded-lg text-white shadow-lg shadow-primary/40">
              <span className="material-symbols-outlined text-3xl">
                <BsRocketTakeoffFill />
              </span>
            </div>
            <span className="text-3xl font-black text-white tracking-tighter uppercase italic">
              JobNest
            </span>
          </div>

          {/* Hero Text */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold mb-4 tracking-widest uppercase">
              New Era
            </span>
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
              Join the <span className="text-accent italic">Future</span> of
              Global Work.
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed">
              Connect with top opportunities and a diverse network of
              professionals worldwide. Your next big career move starts here.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 overflow-hidden border-brand-secondary bg-slate-400">
                  <img src="https://i.pravatar.cc/154" alt="" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-primary overflow-hidden bg-slate-500">
                  <img src="https://i.pravatar.cc/152" alt="" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-secondary overflow-hidden bg-slate-600">
                  <img src="https://i.pravatar.cc/156" alt="" />
                </div>
              </div>
              <span className="text-white/80 text-sm font-medium">
                Join 50,000+ professionals
              </span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-6 text-brand-gray-800/60 text-sm">
            <span>© 2024 JobPortal Inc.</span>
            <a className="hover:text-brand-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-brand-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}

      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white dark:bg-background-dark"
      >
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-neutral-dark dark:text-slate-100 tracking-tight">
              Create Account
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Step into your professional future today.
            </p>
          </div>
          {/* <!-- Role Selection --> */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-neutral-dark dark:text-slate-300 uppercase tracking-wider">
              Select your Role
            </p>
            <div className="grid grid-cols-2 gap-3">
              <label className="group cursor-pointer">
                <input
                  checked={formData.role === "JobSeeker"}
                  className="peer hidden"
                  name="role"
                  type="radio"
                  value="JobSeeker"
                  onChange={handleChange}
                />
                <div className="flex flex-col items-center justify-center p-2 rounded-xl border-2 border-slate-100 bg-slate-50 transition-all peer-checked:border-primary peer-checked:bg-brand-primary dark:bg-slate-800/50 dark:border-slate-700 dark:peer-checked:bg-brand-primary">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-secondary peer-checked:text-brand-secondary transition-colors">
                    <SlUser />
                  </span>
                  <span className="text-xs font-bold mt-2 text-slate-600 dark:text-slate-300">
                    Seeker
                  </span>
                </div>
              </label>
              <label className="group cursor-pointer">
                <input
                  className="peer hidden"
                  name="role"
                  type="radio"
                  value="HR"
                  onChange={handleChange}
                />

                <div className="flex flex-col items-center justify-center p-2 rounded-xl border-2 border-slate-100 bg-slate-50 transition-all peer-checked:border-primary peer-checked:bg-brand-primary dark:bg-slate-800/50 dark:border-slate-700 dark:peer-checked:bg-brand-primary">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-secondary peer-checked:text-brand-secondary transition-colors">
                    <FaBriefcase />
                  </span>
                  <span className="text-xs font-bold mt-2 text-slate-600 dark:text-slate-300">
                    Employer
                  </span>
                </div>
              </label>
            </div>
          </div>
          {/* <!-- Signup Form --> */}
          <div className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">
                Full Name
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                  <SlUser />
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-slate-100 dark:bg-slate-800/80 text-neutral-dark dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 shadow-sm transition-shadow"
                  placeholder="John Doe"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">
                Email Address
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                  <IoMdMail />
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-slate-100 dark:bg-slate-800/80 text-neutral-dark dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 shadow-sm transition-shadow"
                  placeholder="john@example.com"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">
                Password
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                  <FaLock />
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-slate-100 dark:bg-slate-800/80 text-neutral-dark dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 shadow-sm transition-shadow"
                  placeholder="••••••••"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Create Account</span>
              <span className="material-symbols-outlined">
                <LuLogIn />
              </span>
            </button>
          </div>
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-background-dark px-2 text-slate-500">
                Or continue with
              </span>
            </div>
          </div>
          {/* <!-- Social Signups --> */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-brand-gray-900 text-white hover:bg-black transition-colors border border-slate-700">
              {/* Google */}
              <FaGoogle />
              <span className="text-sm font-semibold">Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-brand-gray-900 text-white hover:bg-black transition-colors border border-slate-700">
              {/* LinkedIn */}
              <FaLinkedin />
              <span className="text-sm font-semibold">LinkedIn</span>
            </button>
          </div>

          <div className="text-center pt-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Already have an account?
              <Link
                to="/login"
                className="text-brand-primary font-bold hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
