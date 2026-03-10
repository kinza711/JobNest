const CoverLetter = ({ userApp }) => {
  return (
    <div className="glass rounded-xl p-6 py-5 border-brand-primary/10 border-2 shadow-sm">
      {/* <h4 className="font-bold mb-4">Applicant Details</h4>
      <div className=" flex flex-col rounded-xl shadow-brand-primary/40 shadow-xs mb-5 ">
        <div className="details flex px-5 py-2">
          <h4 className="font-bold ">Applicant Name: </h4>
          <span className="text-slate-600 px-3"> {userApp?.fullName}</span>
        </div>
       
        <div className="details flex px-5 py-2">
          <h4 className="font-bold ">Applicant Email: </h4>
          <span className="text-slate-600 px-3"> {userApp?.email}</span>
        </div>
       
        <div className="details flex px-5 py-2">
          <h4 className="font-bold "> Contact Details: </h4>
          <span className="text-slate-600 px-3"> {userApp?.phone}</span>
        </div>
        
        <div className="details flex px-5 py-2">
          <h4 className="font-bold "> Location: </h4>
          <span className="text-slate-600 px-3"> {userApp?.location}</span>
        </div>
      </div> */}

      <h4 className="font-bold mb-4">Cover Letter</h4>
      <p className="text-slate-600  leading-relaxed">{userApp?.coverLetter}</p>
    </div>
  );
};

export default CoverLetter;
