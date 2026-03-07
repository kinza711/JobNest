import React, { useEffect, useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import api from "../../services/api";
import { Link } from "react-router-dom";

const UserTable = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (type === "JobSeeker") {
          res = await api.get("/jobseeker");
        } else if (type === "hr") {
          res = await api.get("/hr");
        }
        setData(res.data.data);
      } catch (err) {
        console.log("Data not found", err);
      }
    };

    fetchData();
  }, [type]);

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/delete/${id}`);
      alert("user deleted succesfully");
      // Remove the deleted user from state
      setData((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      alert("not delete", err);
    }
  };

  return (
    <div className="glass-panel rounded-2xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/40">
      <div className="px-8 py-5 border-b border-slate-200 flex items-center justify-between">
        <h4 className="font-bold text-slate-800">
          {/* {type === "jobseeker" ? "Job Seekers" : "HR Members"} */}
          User Management
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Name
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Email
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Role
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Phone
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">
                Location
              </th>
              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {data.map((user, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50 transition-colors group"
              >
                <td className="px-8 py-4 capitalize">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.location}</td>
                <td className="px-8 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-brand-secondary hover:border-brand-secondary transition-all flex items-center justify-center">
                      <Link to={`/edituser/${user._id}`}>
                        <MdModeEditOutline />
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="size-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-500 transition-all flex items-center justify-center"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
