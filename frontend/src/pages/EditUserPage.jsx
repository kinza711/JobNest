import React, { useEffect, useState } from "react";
import UserSidebar from "../components/sidebars/UserSidebar";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileCard from "../components/profile/ProfileCard";
import UserHeader from "../components/headers/UserHeader";
import EditUser from "../components/edituser/EditForm";
import AdminSidebar from "../components/sidebars/AdminSidebar";

export default function ProfilePage({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  return (
    <main className="flex min-h-screen w-full">
      {/* Left Sidebar */}
      <aside className="flex h-screen overflow-hidden">
        {children}
        {role === "JobSeeker" ? (
          <UserSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : (
          <AdminSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
      </aside>

      {/* Right Content Area */}
      <section className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header on top */}
        <div className="mb-4">
          <UserHeader setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <EditUser />
            {/* Profile Card */}
            {/* <div className="lg:w-1/3">
              <ProfileCard />
            </div> */}

            {/* Profile Info */}
            {/* <div className="lg:w-2/3 flex flex-col gap-6">
              <ProfileInfo />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
