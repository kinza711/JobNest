import React, { useEffect, useState } from "react";
import UserSidebar from "../components/sidebars/UserSidebar";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileCard from "../components/profile/ProfileCard";
import UserHeader from "../components/headers/UserHeader";
// import { useParams } from "react-router-dom";
// import api from "../services/api";

export default function ProfilePage() {
  // const [profile, setProfile] = useState(null);
  // const { id } = useParams();
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const res = await api.get(`/profile/${id}`);
  //     setProfile(res.data.data);
  //   };
  //   fetchProfile();
  // }, []);

  return (
    <main className="flex min-h-screen w-full">
      {/* Left Sidebar */}
      <aside className="flex h-screen overflow-hidden">
        <UserSidebar />
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
              <ProfileCard />
            </div>

            {/* Profile Info */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              <ProfileInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
