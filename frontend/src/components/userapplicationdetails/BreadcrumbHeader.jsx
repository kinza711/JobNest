const BreadcrumbHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
      <div>
        <nav className="flex gap-2 text-sm text-slate-500 mb-2">
          <span>Candidates</span>
          <span>›</span>
          <span className="text-slate-900 font-medium">
            Application Details
          </span>
        </nav>

        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Marcus Richardson</h1>
          <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold">
            In Review
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="px-3  rounded-xl bg-slate-200 text-sm font-bold">
          Reject
        </button>
        <button className="px-3  rounded-xl bg-brand-primary text-white text-sm font-bold">
          Move to Interview
        </button>
        <button className="px-3 rounded-xl bg-brand-secondary text-white text-sm font-bold">
          Approve
        </button>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
