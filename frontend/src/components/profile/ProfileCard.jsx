// cod wuth correct input fileds
import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { IoMdCamera } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";

export default function UserSidebar() {
  return (
    <aside className="lg:col-span-4 bg-[#F1F6F6] rounded-3xl space-y-6">
      {/* Profile Card */}
      <div className="glass-card rounded-lg p-8 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full border border-brand-secondary/20">
          <span className="material-symbols-outlined !text-[14px]">
            <HiCheckBadge />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Verified Profile
          </span>
        </div>

        <div className="relative mb-6">
          <div
            className="h-36 w-36 rounded-full border-4 border-white shadow-xl bg-center bg-cover"
            style={{
              backgroundImage: 'url("https://i.pravatar.cc/154")',
            }}
          />

          <button className="absolute bottom-1 right-1 flex items-center justify-center bg-brand-primary text-white h-10 w-10 rounded-full border-4 border-white hover:scale-105 transition-transform shadow-lg">
            <span className="material-symbols-outlined !text-[18px]">
              <IoMdCamera />
            </span>
          </button>
        </div>

        <div className="text-center space-y-1">
          <h3 className="text-2xl font-bold text-slate-900">Dummy</h3>
          <p className="text-gray-accent font-medium">Dummmy DEveloper</p>
        </div>

        <div className="mt-8 w-full py-4 rounded-xl bg-slate-900 text-white text-sm font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl">
          <span className="material-symbols-outlined">
            <GrUserSettings />
          </span>
          Profile Summery
        </div>
      </div>

      {/* Contact Info */}
      <div className="glass-card rounded-lg p-6 space-y-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
          Contact Information
        </h4>

        <ContactItem
          icon=<IoMdMail />
          title="Email"
          value="dummy@gmail.com"
          color="brand-primary"
        />
        <ContactItem
          icon=<FaPhoneAlt />
          title="Phone"
          value="9238787989"
          color="brand-secondary"
        />
        <ContactItem
          icon=<IoLocationSharp />
          title="Location"
          value="Dummy lahore narowal"
          color="brand-primary"
        />
      </div>
    </aside>
  );
}

function ContactItem({ icon, title, value, color }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
      <div
        className={`flex items-center justify-center h-10 w-10 rounded-xl bg-${color}/10 text-${color}`}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase font-bold">{title}</p>
        <p className="text-sm font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}
