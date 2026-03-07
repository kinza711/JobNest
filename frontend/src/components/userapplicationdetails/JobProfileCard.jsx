import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // icons for email, phone, location

const ProfileCard = ({ userApp }) => {
  return (
    <div className="glass rounded-xl p-6 shadow-sm">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center pb-6 border-b border-slate-200 dark:border-slate-700">
        <div className="w-32 h-32 rounded-2xl bg-slate-200 dark:bg-slate-800 mb-4 overflow-hidden">
          <img
            src="https://i.pravatar.cc/153"
            alt="Marcus Richardson"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {userApp?.fullName}
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          {userApp?.jobTitle}
        </p>
      </div>

      {/* Contact Info */}
      <div className="py-6 space-y-4  px-5 text-sm">
        <div className="flex items-center gap-2 ">
          <FiMail className="w-4 h-4 text-brand-primary" />
          <span className="font-medium">{userApp?.email}</span>
        </div>
        <div className="flex items-center gap-2 ">
          <FiPhone className="w-4 h-4 text-brand-secondary" />
          <span className="font-medium">{userApp?.phone}</span>
        </div>
        <div className="flex items-center gap-2 ">
          <FiMapPin className="w-4 h-4 text-brand-gray-600" />
          <span className="font-medium">{userApp?.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
