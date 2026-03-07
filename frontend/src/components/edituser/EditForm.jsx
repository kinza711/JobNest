import React, { useEffect, useState } from "react";
import {
  MdPhotoCamera,
  MdCheckCircle,
  MdDelete,
  MdLocationOn,
  MdShield,
  MdHistory,
} from "react-icons/md";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../buttons/Back";

const EditUser = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (users) {
      setFormData({
        name: users.name,
        email: users.email,
        phone: users.phone,
        location: users.location,
        role: users.role || "Recruiter",
      });
    }
  }, [users]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get(`/users/${id}`);
        setUsers(res.data.data);
      } catch (err) {
        console.log("user record not found", err);
      }
    };
    fetchUsers();
  }, [id]);

  // update user

  const UpdateUsers = async () => {
    try {
      const res = await api.put(`/userupdate/${id}`, formData);
      setUsers(res.data.data);
      alert("user updated successfully");
    } catch (err) {
      console.log("user record not found", err);
      alert("user nott updated successfully");
    }
  };

  //delete accoynd
  const handleDelete = async (id) => {
    // Confirmation popup
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );
    if (!confirmDelete) return; // user cancelled

    try {
      await api.delete(`/delete/${id}`);
      alert("User deleted successfully");
      navigate("/usermanagement"); // redirect to user management page
    } catch (err) {
      console.log("Delete error:", err);
      alert("Failed to delete user");
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Edit User Account
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Modify member information, update roles, and manage account
          permissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 text-center">
            <div className="relative inline-block mb-4">
              <img
                src="https://i.pravatar.cc/200"
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-slate-100 dark:border-slate-800 shadow-lg object-cover mx-auto"
              />

              <button className="absolute bottom-1 right-1 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                <MdPhotoCamera />
              </button>
            </div>

            <h3 className="text-xl font-bold">{formData.name}</h3>
            <p className="text-slate-500 text-sm mb-4">Member since Oct 2023</p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full">
                Active
              </span>

              <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full">
                Recruiter
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center border-t border-slate-100 dark:border-slate-800 pt-6">
              <div>
                <p className="text-xl font-bold">14</p>
                <p className="text-xs text-slate-400 uppercase font-semibold">
                  Jobs Posted
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">284</p>
                <p className="text-xs text-slate-400 uppercase font-semibold">
                  Applicants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              Personal Information
            </h4>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    //defaultValue={users?.name}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    // defaultValue={users?.email}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    //defaultValue={users?.phone}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    User Role
                  </label>

                  <div className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary">
                    {formData.role}
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Location
                  </label>

                  <div className="relative">
                    <MdLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input
                      type="text"
                      name="location"
                      value={formData.location || ""}
                      onChange={handleChange}
                      //defaultValue={users?.location}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => UpdateUsers(users._id)}
                    type="button"
                    className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition flex items-center gap-2"
                  >
                    <MdCheckCircle />
                    Save Changes
                  </button>

                  <Back />
                </div>

                <button
                  onClick={() => handleDelete(users._id)}
                  type="button"
                  className="text-red-500 font-semibold text-sm hover:underline flex items-center gap-1"
                >
                  <MdDelete />
                  Deactivate Account
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Cards */}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <MdShield className="text-brand-primary" />
                Security Status
              </h5>

              <p className="text-sm text-slate-500 mb-4">
                Two-factor authentication is currently enabled for this account.
              </p>

              <button className="text-brand-primary text-sm font-bold hover:underline">
                Manage Security
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <MdHistory className="text-brand-primary" />
                Last Activity
              </h5>

              <p className="text-sm text-slate-500 mb-4">
                Last logged in 2 hours ago from San Francisco, CA.
              </p>

              <button className="text-brand-primary text-sm font-bold hover:underline">
                View Access Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
