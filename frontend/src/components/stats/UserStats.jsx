import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdSensorOccupied } from "react-icons/md";
import api from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

const UserStats = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalHR, setTotalHR] = useState(0);
  const [totalJobSeeker, setTotalJobSeeker] = useState(0);
  // total users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        setTotalUsers(res.data.data.length);
        //console.log("user  found");
      } catch (err) {
        console.log("user not found", err);
      }
    };
    fetchUsers();
  }, []);

  // total HR's
  useEffect(() => {
    const fetchHR = async () => {
      try {
        const res = await api.get("/hr");
        setTotalHR(res.data.data.length);
        //console.log("user  found");
      } catch (err) {
        console.log("user not found", err);
      }
    };
    fetchHR();
  }, []);

  // total HR's
  useEffect(() => {
    const fetchJobSeeker = async () => {
      try {
        const res = await api.get("/jobseeker");
        setTotalJobSeeker(res.data.data.length);
        //console.log("user  found");
      } catch (err) {
        console.log("user not found", err);
      }
    };
    fetchJobSeeker();
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      change: "+12%",
      icon: <FaUsers />,
      color: "brand-secondary",
    },
    {
      title: "Employee",
      value: totalHR || "Null",
      change: "Live Status",
      icon: <FaBriefcase />,
      color: "brand-secondary",
    },
    {
      title: "Job Seeker",
      value: totalJobSeeker,
      change: "Action required",
      icon: <MdSensorOccupied />,
      color: "brand-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between"
        >
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">
              {stat.title}
            </p>
            <h3 className="text-2xl font-black text-navy-blue">{stat.value}</h3>
            <p
              className={`text-${stat.color} text-[10px] font-bold mt-2 flex items-center gap-1`}
            >
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>{" "}
              {stat.change}
            </p>
          </div>
          <div
            className={`bg-${stat.color}/50 rounded-2xl flex items-center justify-center text-${stat.color} text-3xl`}
          >
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
