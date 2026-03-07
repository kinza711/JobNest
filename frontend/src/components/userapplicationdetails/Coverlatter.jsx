const CoverLetter = ({ userApp }) => {
  return (
    <div className="glass rounded-xl p-6 border-brand-primary/10 border-2 shadow-sm">
      <h4 className="font-bold mb-4">Cover Letter</h4>
      <p className="text-slate-600  leading-relaxed">{userApp?.coverLetter}</p>
    </div>
  );
};

export default CoverLetter;
