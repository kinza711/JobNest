const ApplicationStats = ({ userApp }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="glass p-4 border-l-4 border-brand-primary rounded-xl">
        <p className="text-xs uppercase text-slate-500">Experience</p>
        <p className="text-lg font-bold text-gray-700">{userApp?.Experience}</p>
      </div>
      <div className="glass p-4 border-l-4 border-brand-secondary rounded-xl">
        <p className="text-xs uppercase text-slate-500">Location</p>
        <p className="text-lg font-bold text-brand-primary">
          {userApp?.location}
        </p>
      </div>
      <div className="glass p-4 border-l-4 border-blue-400 rounded-xl">
        <p className="text-xs uppercase text-slate-500">Availability</p>
        <p className="text-lg font-bold text-brand-secondary">
          {" "}
          {userApp?.availability}
        </p>
      </div>
    </div>
  );
};

export default ApplicationStats;
