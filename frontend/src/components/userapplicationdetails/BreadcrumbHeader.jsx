import api from "../../services/api";

const BreadcrumbHeader = ({ userApp }) => {
  // const { id } = useParams();
  const fetchupdateStatus = (status) => {
    try {
      api.put(`/status/${userApp._id}`, { status });

      alert("status updtaed succesfully");
    } catch (err) {
      console.error("status update failed", err);
      alert("status updtaed faild");
    }
  };

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

        <div className="flex items-center justify-center  gap-10">
          <h1 className="text-3xl font-bold text-center">
            {userApp?.fullName}
          </h1>
          <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold">
            {userApp?.status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => fetchupdateStatus("Rejected")}
          className="px-3 py-1 rounded-xl bg-slate-200 text-sm font-bold"
        >
          Reject
        </button>

        <button
          type="button"
          onClick={() => fetchupdateStatus("Shortlisted")}
          className="px-3 py-1 rounded-xl bg-brand-primary text-white text-sm font-bold"
        >
          Move to Interview
        </button>

        <button
          type="button"
          onClick={() => fetchupdateStatus("Hired")}
          className="px-3 py-1 rounded-xl bg-brand-secondary text-white text-sm font-bold"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
