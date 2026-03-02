const ApplicationStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="glass p-4 border-l-4 border-brand-primary rounded-xl">
        <p className="text-xs uppercase text-slate-500">Experience</p>
        <p className="text-xl font-bold">8+ Years</p>
      </div>
      <div className="glass p-4 border-l-4 border-brand-secondary rounded-xl">
        <p className="text-xs uppercase text-slate-500">Education</p>
        <p className="text-xl font-bold">MFA Design</p>
      </div>
      <div className="glass p-4 border-l-4 border-blue-400 rounded-xl">
        <p className="text-xs uppercase text-slate-500">Notice Period</p>
        <p className="text-xl font-bold">2 Weeks</p>
      </div>
    </div>
  );
};

export default ApplicationStats;
