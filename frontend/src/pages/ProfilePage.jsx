import React, { useEffect, useState } from "react";
import UserSidebar from "../components/sidebars/UserSidebar";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileCard from "../components/profile/ProfileCard";
import UserHeader from "../components/headers/UserHeader";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { useRef } from "react";
import AdminSidebar from "../components/sidebars/AdminSidebar";

export default function ProfilePage() {
  //const { id } = useParams();
  const [profile, setProfile] = useState(null);
  //const [updateProfile, setUpdateProfile] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        password: profile.passowrd || "",
        location: profile.location || "",
        summery: profile.summery || "",
        heading: profile.heading || "",
        pic: profile.pic || "",
        role: profile.role || "HR",
      });
    }
  }, [profile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      // preview url create
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      console.log(file);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get(`/profile`);
      setProfile(res.data.user);
    };
    fetchProfile();
  }, []);

  //update profile info

  const handleUpdateProfile = async () => {
    try {
      const data = new FormData();

      // Form fields
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== undefined) data.append(key, formData[key]);
      });

      // Profile image
      if (profileImageFile) {
        data.append("file", profileImageFile);
      }

      // Send PUT request
      const res = await api.put("/profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProfile(res.data.user);
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Update Error:", err);
      alert("Profile not updated");
    }
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // handel change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="flex min-h-screen w-full">
      {/* Left Sidebar */}
      <aside className="flex h-screen overflow-hidden">
        {role === "JobSeeker" ? <UserSidebar /> : <AdminSidebar />}
      </aside>

      {/* Right Content Area */}
      <section className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header on top */}
        <div className="mb-4">
          <UserHeader />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Profile Card */}
            <div className="lg:w-1/3">
              <ProfileCard
                profile={profile}
                preview={preview}
                fileInputRef={fileInputRef}
                handleClick={handleClick}
                handleImageChange={handleImageChange}
              />
            </div>

            {/* Profile Info */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              <ProfileInfo
                profile={profile}
                formData={formData}
                updateProfile={handleUpdateProfile}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
